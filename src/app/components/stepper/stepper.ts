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
import { Customer, CustomerService } from '../../features/customer/customer.service';
import { Oes, OesService } from '../../features/organization-entity/oes.service';
import { Application, ApplicationService } from '../../features/application/application.service';
import { ServiceEntitiesForm } from "../service-entities-form/service-entities-form";

interface IServiceEntitiesForm {
  customer: Customer,
  orgEntity: Oes,
  application: Application,
  oidcProviders: string,
  instrospecionEndpoint: String,
  storageRegion: string,
  status: boolean,
  enabled: boolean
}

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
    MatSlideToggleModule,
    ServiceEntitiesForm
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
  fileTypesForm!: FormGroup;
  selectedConfiguration: any = null;
  configurationId = 1;
  serviceEntities!: IServiceEntitiesForm;
  private _formBuilder = inject(FormBuilder);

  roles: any[] = [
    { value: 'Role 1', viewValue: 'Role 1' },
    { value: 'Role 2', viewValue: 'Role 2' },
  ];

  action: any[] = [
    { value: 'SCAN', viewValue: 'Scan' },
    { value: 'SCAN AND REPAIR', viewValue: 'Scan and repair' },
  ];


  ngOnInit(): void {
    this.serviceEntities = {
      customer: {
        name: '',
        description: ''
      },
      orgEntity: {
        code: '',
        name: '',
        debtor: 0
      },
      application: {
        name: '',
        description: '',
        applicationFlows: []
      },
      oidcProviders: '',
      instrospecionEndpoint: '',
      storageRegion: '',
      status: false,
      enabled: false
    }
  }


  selectCustomer(value: Customer) {
    this.serviceEntities.customer = value;
    console.log(value)
  }

  selectOe(value: Oes) {
    this.serviceEntities.orgEntity = value;
  }

  selectApplication(value: Application) {
    this.serviceEntities.application = value
  }

  selectIntrospection(value: String) {
    this.serviceEntities.instrospecionEndpoint = value;
  }

  selectOidcProvider(value: string) {
    this.serviceEntities.oidcProviders = value;
  }

  selectStorageRegion(value: string) {
    this.serviceEntities.storageRegion = value;
    console.log(this.serviceEntities)
  }

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

  roleConfigFormGroup = this._formBuilder.group({
    roles: ['', Validators.required],
  });

  onboardApplication() {
    const { orgEntity, customer, application, status, enabled, oidcProviders, storageRegion, instrospecionEndpoint } = this.serviceEntities;
    const consumer = {
      customerId: customer.id,
      orgEntityId: orgEntity.id,
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

