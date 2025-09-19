import { Injectable } from '@angular/core';
import { getCustomers, getOes, getApplications } from "../../../../../__mocks__/customers"
import { OrgEntity } from '../../models/orgEntity';
import { CustomerDetails } from '../../models/customer';
import { OrgEntityI } from '../../interfaces/orgEntity';
import { CUSTOMER_TYPE } from '../../interfaces/customer-type';
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

  getAllOe(): OrgEntityI[] {
    return [...this.orgEntities];
  }

  getAllApplications() {
    return [...this.applications];
  }


  createOe() {
    this.orgEntities.push(this.orgEntity);
  }
  
}
