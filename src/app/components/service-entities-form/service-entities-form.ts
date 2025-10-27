import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { MatSlideToggle } from "@angular/material/slide-toggle";
import { Customer } from '../../features/customer/customer.service';
import { Oes } from '../../features/organization-entity/oes.service';
import { Application } from '../../features/application/application.service';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

interface CustomerSelect {
  id: string,
  name: string
}

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

  @Output() customerChanged = new EventEmitter<Customer>();
  @Output() oesChanged = new EventEmitter<any>();
  @Output() applicationChanged = new EventEmitter<any>();
  @Output() oidcProvidersChanged = new EventEmitter<any>();
  @Output() instrospecionEndpointChanged = new EventEmitter<any>();
  @Output() storageRegionChanged = new EventEmitter<any>();

  storegeRegions = ['eu-central-1', 'eu-west-3', 'ap-east-1', 'ap-southeast-2'];
  selectedApplication: any = { name: '', description: '' };
  selected = 'CUSTOM';
  instros = '';
  customersSelect: CustomerSelect[] = [];

  applicationConfigFormGroup = this._formBuilder.group({
    customer: ['' as any, Validators.required],
    OrgEntity: [{ value: '', disabled: true } as any, Validators.required],
    application: [{ value: '', disabled: true } as any, Validators.required],
    oidcProviders: [{ value: '', disabled: true }, Validators.required],
    instrospecionEndpoint: [{ value: '', disabled: true }, Validators.required],
    storageRegion: [{ value: '', disabled: true }, Validators.required],
    status: [{ value: true, disabled: true }, Validators.required],
    enabled: [{ value: false, disabled: true }, Validators.required],
    clientId: [{ value: '', disabled: true }, Validators.required],
    clientSecret: ['', Validators.required],
  });

  ngOnInit(): void {
    this.customersSelect = this.customers.map<CustomerSelect>((customer) => ({
      id: String(customer.id),
      name: customer.name
    }));

    this.applicationConfigFormGroup.get('customer')?.valueChanges.subscribe(value => {
      const orgEntityControl = this.applicationConfigFormGroup.get('OrgEntity');
      if (value) {
        orgEntityControl?.enable();
        this.customerChanged.emit(value);
      } else {
        orgEntityControl?.disable();
      }
    });

    this.applicationConfigFormGroup.get('OrgEntity')?.valueChanges.subscribe(value => {
      const applicationControl = this.applicationConfigFormGroup.get('application');
      if (value) {
        applicationControl?.enable();
        this.oesChanged.emit(value);
      } else {
        applicationControl?.disable();
      }
    });

    this.applicationConfigFormGroup.get('application')?.valueChanges.subscribe(value => {
      const oidcProvidersnControl = this.applicationConfigFormGroup.get('oidcProviders');
      console.log(value);
      if (value) {
        oidcProvidersnControl?.enable();
        this.applicationChanged.emit(value);
        this.selectedApplication = value;
      } else {
        oidcProvidersnControl?.disable();
      }
    });

    this.applicationConfigFormGroup.get('oidcProviders')?.valueChanges.subscribe(value => {
      const oidcProvidersnControl = this.applicationConfigFormGroup.get('instrospecionEndpoint');
      const clientIdControl = this.applicationConfigFormGroup.get('clientId');
      if (value) {
        this.getIntrospecionEndpoint(value);
        oidcProvidersnControl?.enable();
        clientIdControl?.enable();
        this.oidcProvidersChanged.emit(value);
      } else {
        oidcProvidersnControl?.disable();
      }
    });

    this.applicationConfigFormGroup.get('instrospecionEndpoint')?.valueChanges.subscribe(value => {
      const oidcProvidersnControl = this.applicationConfigFormGroup.get('storageRegion');
      if (value) {
        this.getIntrospecionEndpoint(value);
        oidcProvidersnControl?.enable();
        this.instrospecionEndpointChanged.emit(value);
      } else {
        oidcProvidersnControl?.disable();
      }
    });

    this.applicationConfigFormGroup.get('storageRegion')?.valueChanges.subscribe(value => {
      const oidcProvidersnControl = this.applicationConfigFormGroup.get('status');
      const enabled = this.applicationConfigFormGroup.get('enabled');
      if (value) {
        this.getIntrospecionEndpoint(value);
        oidcProvidersnControl?.enable();
        enabled?.enable();
        this.storageRegionChanged.emit(value);
      } else {
        oidcProvidersnControl?.disable();
        enabled?.disable();
      }
    });
  }

  getIntrospecionEndpoint(value: string) {
    this.selected = value;
    if (value === 'IDP') {
      this.instros = 'https://OIDC.AZ/instrospect';
      this.applicationConfigFormGroup.patchValue({ instrospecionEndpoint: this.instros });
    } else if (value === 'CUSTOM') {
      this.instros = '';
    }
  }

  getCustomersForSeletc(): any[] {
    return this.customers.map(customer => { customer.name, customer.id });
  }

  get isIdpSelected(): boolean {
    return this.applicationConfigFormGroup.get('oidcProviders')?.value === 'IDP';
  }
  setCustomer(event:any){

    console.log(event)
  }
}
