import { Injectable } from '@angular/core';
import { getCustomers, getOes, getApplications } from "../customers"
import { CustomerDetails } from '../../src/app/features/customer/customer.model';
import { OrgEntity } from '../../src/app/features/organization-entity/orgEntity';
import { CUSTOMER_TYPE } from '../../src/app/features/customer/customer-type';

@Injectable({
  providedIn: 'root'
})
export class Customer {
  customerDetails = new CustomerDetails();
  orgEntity = new OrgEntity();
  private customers = getCustomers();
  private orgEntities = getOes();
  private applications = getApplications();

  setCustomerData(name: string, description: string, type: CUSTOMER_TYPE) {
    this.customerDetails.name = name;
    this.customerDetails.description = description;
    this.customerDetails.type = type;
  }

  createCustomer() {
    const { name, description, type } = this.customerDetails;
    this.customers.push({ name, description, type })
  }

  setOrgName(name: string) {
    this.orgEntity.name = name;
  }
  setOrgCode(code: string) {
    this.orgEntity.code = code;
  }

  setOrgDebtor(debtor: string) {
    this.orgEntity.debtor = debtor;
  }


  getAllCustomers() {
    return [...this.customers];
  }

  getAllOe(): any[] {
    return [...this.orgEntities];
  }

  getAllApplications() {
    return [...this.applications];
  }


  createOe() {
    this.orgEntities.push(this.orgEntity);
  }
  
}
