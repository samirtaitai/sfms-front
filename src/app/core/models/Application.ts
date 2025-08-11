import { ApplicationMaxLength } from "../../consts/max-length";

export class Application {
    id!: string;

    private _name!: string;
    get name(): string {
        return this._name;
    }
    set name(value: string) {
        if (value.length > ApplicationMaxLength.name) {
            throw new Error(`Name cannot exceed ${ApplicationMaxLength.name} characters.`);
        }
        this._name = value;
    }

    private _description!: string;
    get description(): string {
        return this._description;
    }
    set description(value: string) {
        if (value.length > ApplicationMaxLength.description) {
            throw new Error(`Description cannot exceed ${ApplicationMaxLength.description} characters.`);
        }
        this._description = value;
    }

}