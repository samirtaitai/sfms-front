export enum ApplicationMaxLength {
    name = 60,
    description = 120,
}

export enum ApplicationFlowMaxLength {
    flowCode = 60,
    description = 120
}

export enum BillingAccountMaxLength {
    name = 60,
    billingManagerEmail = 60,
    technicalManagerEmail = 60,
}

export enum ConfigurationMaxLength {
    configKey = 60,
    configValue = 256
}

export enum ConsumerMaxLength {
    consumerKey = 60,
    oidcInstrospectUri = 256,
    oidcProvider = 50,
    complianceRegion = 60
}

//scan sync 
// scan async 
// scan and download