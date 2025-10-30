import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { MatSlideToggle } from "@angular/material/slide-toggle";
import { Customer } from '../../features/customer/customer.service';
import { Oes } from '../../features/organization-entity/oes.service';
import { Application, ApplicationService } from '../../features/application/application.service';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-service-entities-form',
  standalone: true,
  imports: [
    CommonModule,
    MatInputModule,
    MatSelectModule,
    MatSlideToggle,
    ReactiveFormsModule,
  ],
  templateUrl: './service-entities-form.html',
  styleUrl: './service-entities-form.css'
})
export class ServiceEntitiesForm implements OnInit {

  private _formBuilder = inject(FormBuilder);

  @Input() customers!: Customer[];
  @Input() orgEntities!: Oes[];
  @Input() applications!: Application[];
  @Input() oidcProviders!: any;

  @Output() formData = new EventEmitter<any>();

  storegeRegions: any = [];
  selected = 'CUSTOM';
  instros = '';

  applicationConfigFormGroup = this._formBuilder.group({
    customer: [{ value: '' }, Validators.required],
    orgEntity: [{ value: '', disabled: true } as any, Validators.required],
    application: [{ value: '', disabled: true } as any, Validators.required],
    oidcProvider: [{ value: '', disabled: true }, Validators.required],
    introspectionUrl: [{ value: '', disabled: true }, Validators.required],
    storageRegion: [{ value: '', disabled: true }, Validators.required],
    activated: [{ value: true, disabled: true }, Validators.required],
    locked: [{ value: false, disabled: true }, Validators.required],
    clientId: [{ value: '', disabled: true }],
    clientSecret: [''],
  });

  constructor(private applicationsSrv: ApplicationService) { }

  ngOnInit(): void {
    this.applicationsSrv.getRegions().subscribe({
      next: (respose) => {
        this.storegeRegions = respose;
      }
    });

    this.applicationConfigFormGroup.get('customer')?.valueChanges.subscribe(value => {
      const orgEntityControl = this.applicationConfigFormGroup.get('orgEntity');
      if (value) {
        orgEntityControl?.enable();
        this.formData.emit(this.applicationConfigFormGroup);
      }
    });

    this.applicationConfigFormGroup.get('orgEntity')?.valueChanges.subscribe(value => {
      const applicationControl = this.applicationConfigFormGroup.get('application');
      if (value) {
        applicationControl?.enable();
        this.formData.emit(this.applicationConfigFormGroup);
      }
    });

    this.applicationConfigFormGroup.get('application')?.valueChanges.subscribe(value => {
      const oidcProvidersnControl = this.applicationConfigFormGroup.get('oidcProvider');
      if (value) {
        oidcProvidersnControl?.enable();
        this.formData.emit(this.applicationConfigFormGroup);
      }
    });

    this.applicationConfigFormGroup.get('oidcProvider')?.valueChanges.subscribe(value => {
      const oidcProvidersnControl = this.applicationConfigFormGroup.get('introspectionUrl');
      const clientIdControl = this.applicationConfigFormGroup.get('clientId');
      if (value) {
        this.getIntrospecionEndpoint(value);
        oidcProvidersnControl?.enable();
        clientIdControl?.enable();
        this.formData.emit(this.applicationConfigFormGroup);
      }
    });

    this.applicationConfigFormGroup.get('introspectionUrl')?.valueChanges.subscribe(value => {
      const oidcProvidersnControl = this.applicationConfigFormGroup.get('storageRegion');
      if (value) {
        this.getIntrospecionEndpoint(value);
        oidcProvidersnControl?.enable();
        this.formData.emit(this.applicationConfigFormGroup);
      }
    });

    this.applicationConfigFormGroup.get('storageRegion')?.valueChanges.subscribe(value => {
      const active = this.applicationConfigFormGroup.get('activated');
      const locked = this.applicationConfigFormGroup.get('locked');
      if (value) {
        this.getIntrospecionEndpoint(value);
        active?.enable();
        locked?.enable();
        this.formData.emit(this.applicationConfigFormGroup);
      }
    });

    this.applicationConfigFormGroup.get('activated')?.valueChanges.subscribe(value => {
      if (value && this.applicationConfigFormGroup.valid)
        this.formData.emit(this.applicationConfigFormGroup);
    });

    this.applicationConfigFormGroup.get('locked')?.valueChanges.subscribe(value => {
      if (value && this.applicationConfigFormGroup.valid)
        this.formData.emit(this.applicationConfigFormGroup);
    });
  }

  getIntrospecionEndpoint(value: string) {
    this.selected = value;
    if (value === 'IDP') {
      this.instros = 'https://OIDC.AZ/instrospect';
      this.applicationConfigFormGroup.patchValue({ introspectionUrl: this.instros });
    } else if (value === 'CUSTOM') {
      this.instros = '';
    }
  }

  getCustomersForSeletc(): any[] {
    return this.customers.map(customer => { customer.name, customer.id });
  }

  get isIdpSelected(): boolean {
    return this.applicationConfigFormGroup.get('oidcProvider')?.value === 'IDP';
  }
}
