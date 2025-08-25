import { Component, inject, model, OnInit, signal } from '@angular/core';
import { FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';
import {
  MatDialog,
} from '@angular/material/dialog';
import { Customer } from '../../core/services/customer';
import { CommonModule } from '@angular/common';
import { OrgEntityI } from '../../core/interfaces/orgEntity';
import { MatChipsModule } from '@angular/material/chips';
import { CreateCustomerModal } from '../create-customer-modal/create-customer-modal';
import { CreateOrgEntityModal } from '../create-org-entity-modal/create-org-entity-modal';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatProgressBar } from '@angular/material/progress-bar';
import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from "@angular/material/icon";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-stepper',
  imports: [
    CommonModule,
    MatButtonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonToggleModule,
    MatCheckboxModule,
    MatListModule,
    MatExpansionModule,
    MatCardModule,
    MatChipsModule,
    MatTooltipModule,
    MatProgressBar,
    MatTreeModule,
    MatIconModule,
    RouterLink
  ],
  standalone: true,
  templateUrl: './stepper.html',
  styleUrl: './stepper.css'
})
export class Stepper {

  dataSource = [
    {
      name: 'Work flow',
      children: [
        {
          name: 'Green',
          children: [{ name: 'Broccoli' }, { name: 'Brussels sprouts' }],
        },
        {
          name: 'Orange',
          children: [{ name: 'Pumpkins' }, { name: 'Carrots' }],
        },
      ],
    },
  ];;

  childrenAccessor = (node: any) => node.children ?? [];

  hasChild = (_: number, node: any) => !!node.children && node.children.length > 0;

  readonly animal = signal('');
  readonly name = model('');
  readonly dialog = inject(MatDialog);
  isLinear = true;
  orgEntities: OrgEntityI[] | undefined;
  customers: any[] = [];
  flows: any[] = [];
  applications: any[] = [];
  oidcProviders: any[] = ['IDP', 'CUSTOM']
  loading = false;
  creatingApplication = false;
  readonly panelOpenState = signal(false);

  constructor(private customerSrv: Customer) {
    this.orgEntities = [];
    this.customers = this.customerSrv.getAllCustomers();
    this.applications = this.customerSrv.getAllApplications();
    this.flows = this.customerSrv.getAllFlows();
  }

  hideSingleSelectionIndicator() {
    throw new Error('Method not implemented.');
  }

  private _formBuilder = inject(FormBuilder);

  customerFormGroup = this._formBuilder.group({
    selectedCustomer: ['' as any, Validators.required],
  });

  oeSelectedFormGroup = this._formBuilder.group({
    selected: ['' as any],
  });

  applicationFormGroup = this._formBuilder.group({
    selectedApplication: ['' as any],
  });

  newApplicationFormGroup = this._formBuilder.group({
    name: ['', Validators.required],
    description: ['', Validators.required],
    consumerKey: ['', Validators.required],
    isActive: [false, Validators.required],
    isLocked: [false, Validators.required]
  });

  workflowFormGroup = this._formBuilder.group({
    name: ['', Validators.required],
    description: ['', Validators.required],
  });

  storageFormGroup = this._formBuilder.group({
    instrospecionEndpoint: ['', Validators.required],
    storageRegion: ['', Validators.required],
  })

  setOGr() {
    console.log(this.customerFormGroup.value.selectedCustomer[0])
    if (this.customerFormGroup.value.selectedCustomer[0].type === 'ORG_ENTITY')
      this.oeSelectedFormGroup.value.selected = [{ name: this.customerFormGroup.value.selectedCustomer[0].name, code: this.customerFormGroup.value.selectedCustomer[0].description }]
    else
      this.orgEntities = this.customerSrv.getAllOe()
  }

  openCreateEntityDialog(): void {
    const dialogRef = this.dialog.open(CreateOrgEntityModal);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.orgEntities = this.customerSrv.getAllOe();
      if (result !== undefined) {
        console.log(result);
      }
    });
  }

  openCreateCustomerDialog(): void {
    const dialogRef = this.dialog.open(CreateCustomerModal);
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.customers = this.customerSrv.getAllCustomers();
      if (result !== undefined) {
        console.log(result);
      }
    });
  }

  instros = ''

  getIntrospecionEndpoint(value: string) {
    if (value === 'IDP') {
      this.instros = 'https://OIDC.AZ/instrospect';
    } else if (value === 'CUSTOM') {
      this.instros = '';
    }
  }


  createOrgEntityTooltipTemplate(orgEntity: OrgEntityI): string {
    return `Code: ${orgEntity.code}
            Debtor: ${orgEntity.debtor}
  `
  }

  createApplication() {
    this.loading = true
    this.creatingApplication = true;
    this.loading = false;
  }

  calcelCreateApplication() {
    this.loading = true;
    this.creatingApplication = false;
    this.newApplicationFormGroup.reset();
    this.loading = false;
  }

}

