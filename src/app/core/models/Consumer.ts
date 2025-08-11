import { ConsumerMaxLength } from "../../consts/max-length";

export class Consumer {
    id!: string;
    orgEntityId!: string;
    customerId!: string;
    applicationId!: string;
    active!: boolean;
    locked!: boolean;

    private _consumerKey!: string;
    get consumerKey(): string {
        return this._consumerKey;
    }
    set consumerKey(value: string) {
        if (value.length > ConsumerMaxLength.consumerKey) {
            throw new Error(`Consumer key cannot exceed ${ConsumerMaxLength.consumerKey} characters.`);
        }
        this._consumerKey = value;
    }

    private _oidcIntrospectiveUri!: string;
    get oidcIntrospectiveUri(): string {
        return this._oidcIntrospectiveUri;
    }
    set oidcIntrospectiveUri(value: string) {
        if (value.length > ConsumerMaxLength.oidcInstrospectUri) {
            throw new Error(`OIDC introspective URI cannot exceed ${ConsumerMaxLength.oidcInstrospectUri} characters.`);
        }
        this._oidcIntrospectiveUri = value;
    }

    private _complianceRegion!: string;
    get complianceRegion(): string {
        return this._complianceRegion;
    }
    set complianceRegion(value: string) {
        if (value.length > ConsumerMaxLength.complianceRegion) {
            throw new Error(`Compliance region cannot exceed ${ConsumerMaxLength.complianceRegion} characters.`);
        }
        this._complianceRegion = value;
    }

    private _oidcProvider!: string;
    get oidcProvider(): string {
        return this._oidcProvider;
    }
    set oidcProvider(value: string) {
        if (value.length > ConsumerMaxLength.oidcProvider) {
            throw new Error(`OIDC Provider cannot exceed ${ConsumerMaxLength.oidcProvider} characters.`);
        }
        this._oidcProvider = value;
    }
}