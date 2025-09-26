import { ConsumerMaxLength } from "../../consts/max-length";

export class OrgEntity {
    private _name!: string;
    get name(): string {
        return this._name;
    }
    set name(value: string) {
        if (value.length > ConsumerMaxLength.consumerKey) {
            throw new Error(`ORG ENTITY Name cannot exceed ${ConsumerMaxLength.consumerKey} characters.`);
        }
        this._name = value;
    }

    private _code!: string;
    get code(): string {
        return this._code;
    }
    set code(value: string) {
        if (value.length > ConsumerMaxLength.consumerKey) {
            throw new Error(`ORG ENTITY Detail cannot exceed ${ConsumerMaxLength.consumerKey} characters.`);
        }
        this._code = value;
    }

    private _debtor!: string;
    get debtor(): string {
        return this._debtor;
    }
    set debtor(value: string) {
        if (value.length > ConsumerMaxLength.consumerKey) {
            throw new Error(`ORG ENTITY Detail cannot exceed ${ConsumerMaxLength.consumerKey} characters.`);
        }
        this._debtor = value;
    }
}