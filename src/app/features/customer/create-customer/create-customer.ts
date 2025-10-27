import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatInputModule } from '@angular/material/input';
import { NavBar } from "../../../components/nav-bar/nav-bar";
import { MatCard, MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { CustomerService } from '../customer.service';
import { ChangeDetectorRef } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Spinner } from "../../../components/spinner/spinner";
import { Toast } from "../../../components/toast/toast";
import { Router } from '@angular/router';

enum CUSTOMER_TYPE {
  productOwner = 'PRODUCT_OWNER',
  orgEntity = 'ORG_ENTITY'
}

@Component({
  selector: 'app-create-customer',
  changeDetection: ChangeDetectionStrategy.Default,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonToggleModule,
    MatInputModule,
    MatButton,
    NavBar,
    MatCard,
    MatCardModule,
    MatIconModule,
    RouterLink,
    Spinner,
    Toast
  ],
  providers: [CustomerService],
  standalone: true,
  templateUrl: './create-customer.html',
  styleUrl: './create-customer.css'
})
export class CreateCustomer {
  private router = inject(Router);
  private _formBuilder = inject(FormBuilder);
  customerFormGroup: any
  loading: any;
  toastMessage = '';
  showToast = false;
  backHistory() {
    history.back();
  }
  constructor(
    private customerSrv: CustomerService,
    private cdr: ChangeDetectorRef
  ) {
    this.customerFormGroup = this._formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      type: ['', Validators.required] as unknown as CUSTOMER_TYPE
    });
  }

  showSuccessToast(message: string): void {
    this.toastMessage = message;
    this.showToast = true;
    setTimeout(() => {
      this.showToast = false;
    }, 10000);
  }

  createCustomer() {
    this.loading = true;
    const { name, description, type } = this.customerFormGroup.value;
    if (name && description && type) {
      this.customerSrv.create({ name, description }).subscribe({
        next: (response) => {
          this.loading = false;
          this.showSuccessToast('Customer Created Successfully');
          this.customerFormGroup.reset();
          this.cdr.detectChanges();
          this.router.navigate(['/customers']);
        }
      });
    }
  }
}



