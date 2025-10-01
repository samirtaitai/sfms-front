import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormsModule, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from "@angular/material/icon";
import { MatSelectModule } from '@angular/material/select';
import { MatChipsModule } from '@angular/material/chips';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { Customer } from '../../../../__mocks__/customer/customer';
import { CustomerService } from '../../features/customer/customer.service';
import { OesService } from '../../features/organization-entity/oes.service';
import { ApplicationService } from '../../features/application/application.service';

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
    MatTooltipModule,
    MatTreeModule,
    MatIconModule,
    MatSelectModule,
    MatButtonModule,
    MatChipsModule,
    MatSlideToggleModule
  ],
  providers: [
    CustomerService,
    OesService,
    ApplicationService
  ],
  standalone: true,
  templateUrl: './stepper.html',
  styleUrl: './stepper.css'
})
export class Stepper implements OnInit {
  allTypesSelected = false;
  addButonDisabled = false;
  ngOnInit(): void {

    this.applicationConfigFormGroup.get('customer')?.valueChanges.subscribe(value => {
      const orgEntityControl = this.applicationConfigFormGroup.get('OrgEntity');
      if (value) {
        orgEntityControl?.enable();
      } else {
        orgEntityControl?.disable();
      }
    });

    this.applicationConfigFormGroup.get('OrgEntity')?.valueChanges.subscribe(value => {
      const applicationControl = this.applicationConfigFormGroup.get('application');
      if (value) {
        applicationControl?.enable();
      } else {
        applicationControl?.disable();
      }
    });

    this.applicationConfigFormGroup.get('application')?.valueChanges.subscribe(value => {
      const oidcProvidersnControl = this.applicationConfigFormGroup.get('oidcProviders');
      if (value) {
        this.selectedApplication = value;
        oidcProvidersnControl?.enable();
      } else {
        oidcProvidersnControl?.disable();
      }
    });

    this.applicationConfigFormGroup.get('oidcProviders')?.valueChanges.subscribe(value => {
      const oidcProvidersnControl = this.applicationConfigFormGroup.get('instrospecionEndpoint');
      if (value) {
        this.getIntrospecionEndpoint(value);
        oidcProvidersnControl?.enable();
      } else {
        oidcProvidersnControl?.disable();
      }
    });

    this.applicationConfigFormGroup.get('instrospecionEndpoint')?.valueChanges.subscribe(value => {
      const oidcProvidersnControl = this.applicationConfigFormGroup.get('storageRegion');
      if (value) {
        this.getIntrospecionEndpoint(value);
        oidcProvidersnControl?.enable();
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
      } else {
        oidcProvidersnControl?.disable();
        enabled?.disable();
      }
    });

    this.fileTypesForm.get('type')?.valueChanges.subscribe(value => {
      if (value !== 'ALL') {
        this.addButonDisabled = false;
      }
    })

  }

  childrenAccessor = (node: any) => node.children ?? [];

  hasChild = (_: number, node: any) => !!node.children && node.children.length > 0;

  isLinear = true;
  orgEntities: any[] = [];
  customers: any[] = [];
  applications: any[] = [];
  oidcProviders: any[] = ['IDP', 'CUSTOM']
  loading = false;
  configurations: any = [];
  selectedRoles: any = [];
  creatingApplication = false;
  selectedApplication: any = { name: '', description: '' };
  selected = 'CUSTOM';
  fileTypesForm!: FormGroup;
  selectedConfiguration: any = null;
  configurationId = 1;
  private _formBuilder = inject(FormBuilder);

  roles: any[] = [
    { value: 'Role 1', viewValue: 'Role 1' },
    { value: 'Role 2', viewValue: 'Role 2' },
  ];

  action: any[] = [
    { value: 'SCAN', viewValue: 'Scan' },
    { value: 'SCAN AND REPAIR', viewValue: 'Scan and repair' },
  ];

  storegeRegions = ['eu-central-1', 'eu-west-3', 'ap-east-1', 'ap-southeast-2']


  addRole(id: any) {
    this.selectedRoles.push({ flowId: id, role: this.roleConfigFormGroup.value.roles });
  }

  fileTypes: any[] = [
    'doc',
    'docx',
    'pdf',
    'rtf',
    'dot',
    'dotx',
    'xls',
    'pdf',
    'csv',
    'xlt',
    'pdf',
    'png',
    'ppt',
    'pdf',
    'pot',
    'pdf',
    'png'

  ];

  constructor(
    private customersSrv: CustomerService,
    private oesSrv: OesService,
    private applicationsSrv: ApplicationService
  ) {
    this.customersSrv.getAll().subscribe({
      next: (response) => {
        this.customers = response;
      }
    });
    this.oesSrv.getAll().subscribe({
      next: (response) => {
        this.orgEntities = response;
      }
    });
    this.applicationsSrv.getAll().subscribe({
      next: (response) => {
        this.applications = response;
      }
    });
    this.applicationsSrv.getRoles().subscribe({
      next: (response) => {
        this.roles = response;
      }
    });
    this.applicationsSrv.getServiceActions().subscribe({
      next: (resopnse) => {
        this.action = resopnse;
      }
    })
    this.fileTypesForm = this._formBuilder.group({
      action: ['', Validators.required],
      type: ['', Validators.required],
      size: ['', Validators.required]
    });
  }

  addConfiguration(flow: any) {
    const config = { ...this.fileTypesForm.value, flowId: flow.id }
    this.configurations.push(config);
    this.fileTypesForm.reset();

  }

  deleteConfiguration(index: number) {
    this.configurations.splice(index, 1);
  }

  consfigurationSelected(configurationId: any) {
    return this.selectedConfiguration && this.selectedConfiguration.flowId === configurationId;
  }

  selectConfiguration(config: any) {
    this.selectedConfiguration = config;
  }

  filterConfigurations(flowName: any) {
    return this.configurations.filter((config: any) => config.flowName === flowName);
  }

  selectapplication(app: any) {
    this.selectedApplication = app;
  }

  hasConfiguration(flowName: string) {
    return this.configurations.some((config: any) => config.flowName === flowName);
  }

  copyConfiguration(flowId: string) {
    if (this.selectedConfiguration) {
      const config = { ...this.selectedConfiguration };
      config.flowId = flowId;
      this.configurations.push(config);
    }
  }

  applicationConfigFormGroup = this._formBuilder.group({
    customer: ['' as any, Validators.required],
    OrgEntity: [{ value: '', disabled: true } as any, Validators.required],
    application: [{ value: '', disabled: true } as any, Validators.required],
    oidcProviders: [{ value: '', disabled: true }, Validators.required],
    instrospecionEndpoint: [{ value: '', disabled: true }, Validators.required],
    storageRegion: [{ value: '', disabled: true }, Validators.required],
    status: [{ value: true, disabled: true }, Validators.required],
    enabled: [{ value: false, disabled: true }, Validators.required],
  });

  roleConfigFormGroup = this._formBuilder.group({
    roles: ['', Validators.required],
  });

  instros = ''

  getIntrospecionEndpoint(value: string) {
    this.selected = value;
    if (value === 'IDP') {
      this.instros = 'https://OIDC.AZ/instrospect';
      this.applicationConfigFormGroup.patchValue({ instrospecionEndpoint: this.instros });
    } else if (value === 'CUSTOM') {
      this.instros = '';
    }
  }

  onboardApplication() {
    const { OrgEntity, customer, application, status, enabled, oidcProviders, storageRegion, instrospecionEndpoint } = this.applicationConfigFormGroup.value;
    const consumer = {
      customerId: customer.id,
      orgEntityId: OrgEntity.id,
      applicationId: application.id,
      status,
      enabled,
      oidcProviders,
      storageRegion,
      instrospecionEndpoint,
      flowRoles: this.selectedRoles,
      flowsConfig: this.consfigFlows()
    }
    console.log(consumer);
    /*this.applicationsSrv.createConsumer(consumer).subscribe({
       next: (response) => {
         console.log(response);
         
       }
     })*/
  }

  consfigFlows() {
    return this.configurations.map((config: { flowId: any; action: any; type: any; size: any; }) => {
      return {
        flowId: config.flowId,
        action: config.action,
        type: config.type,
        fileSize: config.size
      }
    })
  }

}

