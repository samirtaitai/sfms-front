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
import { LoadedElementsComponent } from "../loaded-elements/loaded-elements";
import { RolesConfigTable } from "../roles-config-table/roles-config-table";

interface IServiceEntitiesForm {
  customer: Customer,
  orgEntity: Oes,
  application: Application,
  oidcProvider: string,
  introspectionUrl: String,
  storageRegion: string,
  locked: boolean,
  activated: boolean
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
    ServiceEntitiesForm,
    LoadedElementsComponent,
    RolesConfigTable
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

  selectFlow(flow: any) {
    this.selectedFlow = flow;
    this.groupConfigurations()
  }


  allTypesSelected = false;
  addButonDisabled = false;

  childrenAccessor = (node: any) => node.children ?? [];

  hasChild = (_: number, node: any) => !!node.children && node.children.length > 0;

  isLinear = true;
  orgEntities: any[] = [];
  customers: any[] = [];
  applications: any[] = [];
  oidcProvider: any[] = ['IDP', 'CUSTOM']
  loading = false;
  configurations: any = [];
  selectedRoles: any = [];
  creatingApplication = false;
  selectedApplication: any = { name: '', description: '' };
  fileTypesForm!: FormGroup;
  selectedConfiguration: any = null;
  clipBoard: any;
  selectedFlow: any;
  configurationId = 1;
  serviceEntities!: IServiceEntitiesForm;
  private _formBuilder = inject(FormBuilder);
  groupedConfigurations: { flowName: string; configs: any[] }[] = [];
  roles: any[] = [];
  action: any[] = [];


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
      oidcProvider: '',
      introspectionUrl: '',
      storageRegion: '',
      locked: false,
      activated: false
    }
  }


  selectCustomer(value: Customer) {
    this.serviceEntities.customer = value;
  }

  selectOe(value: Oes) {
    this.serviceEntities.orgEntity = value;
  }

  selectApplication(value: Application) {
    this.selectedApplication = value;
    this.serviceEntities.application = value
  }

  selectIntrospection(value: String) {
    this.serviceEntities.introspectionUrl = value;
  }

  selectOidcProvider(value: string) {
    this.serviceEntities.oidcProvider = value;
  }

  selectStorageRegion(value: string) {
    this.serviceEntities.storageRegion = value;
  }

  addRole(role: any): void {
    const index = this.selectedRoles.findIndex((r: { flowId: string; }) => r.flowId === role.flowId);
    if (index !== -1) {
      this.selectedRoles[index].roleId = role.roleId;
    } else {
      this.selectedRoles.push(role);
    }
  }

  fileTypes: any[] = [
    'All Types',
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
      actionId: ['', Validators.required],
      type: ['', Validators.required],
      size: ['', Validators.required]
    });
  }

  addConfiguration() {
    const config = { ...this.fileTypesForm.value, flowId: this.selectedFlow.id, flowName: this.selectedFlow.flowCode }
    if (this.fileTypesForm.value.type === "All Types")
      this.configurations = this.configurations.filter((conf: { flowId: any; }) => conf.flowId !== this.selectedFlow.id);
    else
      this.configurations = this.configurations.filter(
        (conf: { flowId: any; type: any }) =>
          !(conf.flowId === config.flowId && conf.type === "All Types")
      );

    this.configurations.push(config);
    this.fileTypesForm.reset();
    this.groupConfigurations();
  }

  deleteConfiguration(index: number) {
    this.configurations.splice(index, 1);
    this.groupConfigurations();
  }

  consfigurationSelected(configurationId: any) {
    return this.selectedConfiguration && this.selectedConfiguration.flowId === configurationId;
  }

  selectConfiguration(config: any) {
    this.selectedConfiguration = { ...config, flowId: this.selectedFlow.id, flowName: this.selectedFlow.flowCode };
    this.groupConfigurations();
  }

  filterConfigurations(flowName: any) {
    return this.configurations.filter((config: any) => config.flowName === flowName);
  }

  hasConfiguration(flowName: string) {
    return this.configurations.some((config: any) => config.flowName === flowName);
  }

  copyConfiguration(conf: any) {
    const config = { ...conf, flowId: this.selectedFlow.id, flowName: this.selectedFlow.flowCode };
    this.clipBoard = config;
  }

  groupConfigurations() {
    const map = new Map<string, any[]>();
    for (const config of this.configurations) {
      if (!map.has(config.flowName)) {
        map.set(config.flowName, []);
      }
      map.get(config.flowName)!.push(config);
    }
    this.groupedConfigurations = Array.from(map.entries()).map(([flowName, configs]) => ({
      flowName,
      configs
    }));
  }


  duplicateConfig(conf: any) {
    const config = { ...conf, flowId: this.selectedFlow.id, flowName: this.selectedFlow.flowCode };
    this.configurations.push(config);
    this.groupConfigurations();
  }

  paste() {
    if (this.clipBoard) {
      this.clipBoard.flowId = this.selectedFlow.id;
      this.clipBoard.flowName = this.selectedFlow.flowCode;
      this.configurations.push(this.clipBoard);
      this.groupConfigurations();
      this.clipBoard = null;
    }
  }

  roleConfigFormGroup = this._formBuilder.group({
    roles: ['', Validators.required],
  });

  onboardApplication() {
    const { orgEntity, customer, application, locked, activated, oidcProvider, storageRegion, introspectionUrl } = this.serviceEntities;
    const consumer = {
      customerId: customer.id,
      orgEntityId: orgEntity.id,
      applicationId: application.id,
      locked,
      activated,
      oidcProvider,
      storageRegion,
      introspectionUrl,
      flowRoles: this.selectedRoles,// pass the role id and not the name roleId 
      fileFlowsConfig: this.consfigFlows()
    }
    //  console.log(consumer);
    this.applicationsSrv.createConsumer(consumer).subscribe({
      next: (response) => {
        console.log(response);

      }
    })
  }

  consfigFlows() {
    return this.configurations.map((config: { flowId: any; actionId: any; type: any; size: any; }) => {
      return {
        flowId: config.flowId,
        actionId: config.actionId,
        type: config.type,
        fileSize: config.size
      }
    })
  }

}

