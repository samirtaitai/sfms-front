import { ConfigurationMaxLength } from "../../consts/max-length";

export class Configuration {
    private _configKey!: string;
    get configKey(): string {
        return this._configKey;
    }
    set configKey(value: string) {
        if (value.length > ConfigurationMaxLength.configKey) {
            throw new Error(`Config key cannot exceed ${ConfigurationMaxLength.configKey} characters.`);
        }
        this._configKey = value;
    }

    private _configValue!: string;
    get configValue(): string {
        return this._configValue;
    }
    set configValue(value: string) {
        if (value.length > ConfigurationMaxLength.configValue) {
            throw new Error(`Config value cannot exceed ${ConfigurationMaxLength.configValue} characters.`);
        }
        this._configValue = value;
    }
}