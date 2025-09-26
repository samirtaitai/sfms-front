export const mockApplicationOnboarding = {
    customerId: 'cust-789',
    orgEntityId: 'org-101',
    applicationId: 'app-456',
    oidcProvider: 'custom',
    introspectionUrl: 'https://example.com/introspect',
    storageRegion: 'us-west-2',
    activated: true,
    locked: false,
    flowRoles: [
        { flowId: 'flow-01', role: 'AMS_INTERNET_TU' },
        { flowId: 'flow-02', role: 'AMS_INTERNET' }
    ],
    flowsConfig: [
        { flowId: 'flow-01', action: 'ANTI_MALWARE_SCAN_SYNC', type: '', fileSize: '' },
        { flowId: 'flow-01', action: 'ANTI_MALWARE_SCAN_ASYNC', type: '', fileSize: '' },
        { flowId: 'flow-02', action: 'VIRUS_TOTAL_SCAN', type: '', fileSize: '' }
    ],
};
