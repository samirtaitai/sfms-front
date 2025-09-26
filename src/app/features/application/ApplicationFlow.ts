import { ApplicationFlowMaxLength } from "../../consts/max-length";

export class ApplicationFlow {
    id!: string;
    applicationId!: string;

    private _flowCode !: string;
    get flowCode(): string {
        return this._flowCode;
    }
    set flowCode(value: string) {
        if (value.length > ApplicationFlowMaxLength.flowCode) {
            throw new Error(`Flow code cannot exceed ${ApplicationFlowMaxLength.flowCode} characters.`);
        }
        this._flowCode = value;
    }
}