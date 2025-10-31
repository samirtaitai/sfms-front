import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
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
import { Spinner } from "../spinner/spinner";
import { Router } from '@angular/router';
import { FileTypes } from '../../services/file-types';

interface IServiceEntitiesForm {
  customer: Customer,
  orgEntity: Oes,
  application: Application,
  oidcProvider: string,
  introspectionUrl: String,
  storageRegion: string,
  locked: boolean,
  activated: boolean,
  clientSecret: string,
  clientId: string
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
    RolesConfigTable,
    Spinner
  ],
  providers: [
    CustomerService,
    OesService,
    ApplicationService,
    FileTypes
  ],
  standalone: true,
  templateUrl: './stepper.html',
  styleUrl: './stepper.css'
})
export class Stepper implements OnInit {
  private router = inject(Router);

  selectFlow(flow: any) {
    this.selectedFlow = flow;
    this.groupConfigurations()
  }
  allTypesSelected = false;

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
  filterText = '';
  firstStepFormComplete = false;
  secondFormComplete = false;
  summary: any;
  displaySummay = false;

  ngOnInit(): void { }

  loadComplete() {
    this.secondFormComplete = true;
  }

  addRole(role: any): void {
    const index = this.selectedRoles.findIndex((r: { flowId: string; }) => r.flowId === role.flowId);
    if (index !== -1) {
      this.selectedRoles[index].roleId = role.roleId;
    } else {
      this.selectedRoles.push(role);
    }
  }

  fileTypes: any[] = [];
  get filteredFiles() {
    const text = this.filterText.toLowerCase();
    return this.fileTypes.filter(
      file =>
        file.description.toLowerCase().includes(text) ||
        file.extension.toLowerCase().includes(text)
    );
  }

  constructor(
    private customersSrv: CustomerService,
    private oesSrv: OesService,
    private applicationsSrv: ApplicationService,
    private fileTypesSrv: FileTypes,
    private cdr: ChangeDetectorRef,
  ) {
    this.loading = true;
    this.customersSrv.getAll().subscribe({
      next: (response) => {
        this.customers = response;
        this.loading = false;
        this.cdr.detectChanges();
      }
    });
    this.fileTypesSrv.getAll().subscribe({
      next: (response) => {
        this.fileTypes = [{ description: 'All file types accepted', extension: "All Types", id: null }, ...response];
        this.loading = false;
        this.cdr.detectChanges();
      }
    })
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
    });

    this.fileTypesForm = this._formBuilder.group({
      action: ['', Validators.required],
      type: ['', Validators.required],
      size: ['', Validators.required]
    });
  }

  onFormReceived(form: FormGroup) {
    if (form.valid) {
      this.firstStepFormComplete = true;
      this.serviceEntities = form.value;
    }
    else
      this.firstStepFormComplete = false;
  }

  addConfiguration() {
    const config = { ...this.fileTypesForm.value, flowId: this.selectedFlow.id, flowName: this.selectedFlow.flowCode }
    if (this.fileTypesForm.value.type.extension === "All Types")
      this.configurations = this.configurations.filter((conf: { flowId: any; }) => conf.flowId !== this.selectedFlow.id);
    else
      this.configurations = this.configurations.filter(
        (conf: { flowId: any; type: any }) =>
          !(conf.flowId === config.flowId && conf.type.extension === "All Types")
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
    this.loading = true;
    const { clientId, clientSecret, orgEntity, customer, application, locked, activated, oidcProvider, storageRegion, introspectionUrl } = this.serviceEntities;
    const consumer = {
      customerId: customer.id,
      orgEntityId: orgEntity.id,
      applicationId: application.id,
      locked,
      activated,
      oidcProvider,
      storageRegion,
      introspectionUrl,
      clientId,
      clientSecret,
      flowRoles: this.selectedRoles,
      fileFlowsConfig: this.consfigFlows()//type not id
    }

    console.log(consumer);

    this.applicationsSrv.createConsumer(consumer).subscribe({
      next: (response) => {
        this.summary = response.fileConfigurations[0]?.consumer;
        this.displaySummay = true;
      },
      complete: () => {
        this.loading = false;
        this.cdr.detectChanges();
      }
    })
  }

  consfigFlows() {
    return this.configurations.map((config: { flowId: any; action: any; type: any; size: any; }) => {
      return {
        flowId: config.flowId,
        actionId: config.action.id,
        type: config.type.extension,
        fileSize: config.size
      }
    })
  }

  navigateToAdmin() {
    this.router.navigate(['/admin-distributive'])
  }

}

