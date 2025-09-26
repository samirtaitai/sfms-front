import { ConsumerMaxLength } from "../../consts/max-length";
import { CUSTOMER_TYPE } from "./customer-type";

export class CustomerDetails {
    private _name!: string;
    get name(): string {
        return this._name;
    }
    set name(value: string) {
        if (value.length > ConsumerMaxLength.consumerKey) {
            throw new Error(`Customer Name cannot exceed ${ConsumerMaxLength.consumerKey} characters.`);
        }
        this._name = value;
    }

    private _description!: string;
    get description(): string {
        return this._description;
    }
    set description(value: string) {
        if (value.length > ConsumerMaxLength.consumerKey) {
            throw new Error(`Customer Detail cannot exceed ${ConsumerMaxLength.consumerKey} characters.`);
        }
        this._description = value;
    }

    type: CUSTOMER_TYPE | undefined;
    constructor() {

    }
}