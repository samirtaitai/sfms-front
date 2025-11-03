// core/services/environment.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from '../../../environments/environment';

interface EnvironmentsI {
  default: string,
  dev: string,
  prod: string,
  preProd: string,
}

@Injectable({ providedIn: 'root' })
export class EnvironmentService {
  private selectedEnvironment: string = '';
  private environments: EnvironmentsI = {
    default: `${environment.baseUrl}`,
    dev: 'https://sfms-dev.agn-dev.ec1.aws.aztec.cloud.allianz',
    preProd: 'https://api-preprod.sfms.allianz.com',
    prod: 'https://api-preprod.sfms.allianz.com',
  }

  constructor() {
    this.selectedEnvironment = this.environments.default;
  }

  getSelectedEnvironment(): Observable<string> {
    return of(this.selectedEnvironment);
  }

  setDefaultEnv(): void {
    this.selectedEnvironment = this.environments.default;
  }

  setProdEnv(): void {
    this.selectedEnvironment = this.environments.prod;
  }

  setDevEnv(): void {
    this.selectedEnvironment = this.environments.dev;
  }

  setPreprodEnv(): void {
    this.selectedEnvironment = this.environments.preProd;
  }

}