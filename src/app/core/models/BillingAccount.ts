import { BillingAccountMaxLength } from "../../consts/max-length";

export class BillingAccount {
    id!: string;
    orgEntityId!: string;
    customerId!: string;
    constCenter!: number;

    private _name!: string;
    get name(): string {
        return this._name;
    }
    set name(value: string) {
        if (value.length > BillingAccountMaxLength.name) {
            throw new Error(`Name cannot exceed ${BillingAccountMaxLength.name} characters.`);
        }
        this._name = value;
    }

    private _billingManagerEmail!: string;
    get billingManagerEmail(): string {
        return this._billingManagerEmail;
    }
    set billingManagerEmail(value: string) {
        if (value.length > BillingAccountMaxLength.billingManagerEmail) {
            throw new Error(`Billing manager email cannot exceed ${BillingAccountMaxLength.billingManagerEmail} characters.`);
        }
        this._billingManagerEmail = value;
    }

    private _technicalManagerEmail!: string;
    get technicalManagerEmail(): string {
        return this._technicalManagerEmail;
    }
    set technicalManagerEmail(value: string) {
        if (value.length > BillingAccountMaxLength.technicalManagerEmail) {
            throw new Error(`Technical manager email cannot exceed ${BillingAccountMaxLength.technicalManagerEmail} characters.`);
        }
        this._technicalManagerEmail = value;
    }



}