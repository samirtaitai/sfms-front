import { delay, Observable, of } from "rxjs";

const customers = [
    { name: 'Station one', description: 'Customes to manage', type: 'ORG ENTITY' },
    { name: 'Consumer OE', description: 'Customes OE Type', type: 'ORG ENTITY' },
    { name: 'The ultimate consumer', description: 'Just a consumer', type: 'PRODUCT OWNER' },
    { name: 'Station sami', description: 'Customes created by Samir', type: 'PRODUCT OWNER' },
    { name: 'Consumer tinin', description: 'Customes created by Tinin', type: 'ORG ENTITY' },
    { name: 'Platform', description: 'Platform', type: 'PRODUCT OWNER' },
    { name: 'MARGA', description: 'Customes', type: 'ORG ENTITY' },
    { name: 'Mari', description: 'Required', type: 'ORG ENTITY' },
    { name: 'Area 2', description: 'Counsumer Area 2', type: 'PRODUCT OWNER' }
];

const OES = [
    { name: 'SPAIN', code: 'SP', debtor: '4325' },
    { name: 'SPAIN 2', code: 'SP2', debtor: '334' },
    { name: 'FRANCE', code: 'FR', debtor: '1123' },
    { name: 'FRANCE 2', code: 'FR2', debtor: '334' },
    { name: 'PORTUGAL', code: 'PT', debtor: '0098' },
    { name: 'ARGENTINA', code: 'AR', debtor: '8857' },
    { name: 'PORTUGAL 2', code: 'PT2', debtor: '003394' },
    { name: 'ARGENTINA 2', code: 'AR2', debtor: '1123' },
    { name: 'USA', code: 'USA', debtor: '445' }
]

const applications = [
    { name: 'Station one', description: 'Customes to manage', flowCode: 'newFlow', flowDescription: 'secure flow', flowAction: 'download', fileType: 'JPG', fileSize: '5' },
    { name: 'Application 1', description: 'Customes OE Type', flowCode: 'newFlow', flowDescription: 'secure flow', flowAction: 'download', fileType: 'JPG', fileSize: '5' },
    { name: 'The ultimate consumer', description: 'Just a consumer', flowCode: 'newFlow', flowDescription: 'secure flow', flowAction: 'download', fileType: 'JPG', fileSize: '5' },
    { name: 'Station sami', description: 'Customes created by Samir', flowCode: 'newFlow', flowDescription: 'secure flow', flowAction: 'download', fileType: 'JPG', fileSize: '5' },
    { name: 'Consumer tinin', description: 'Customes created by Tinin', flowCode: 'newFlow', flowDescription: 'secure flow', flowAction: 'download', fileType: 'JPG', fileSize: '5' },
    { name: 'Platform', description: 'Platform', flowCode: 'newFlow', flowDescription: 'secure flow', flowAction: 'download', fileType: 'JPG', fileSize: '5' },
    { name: 'MARGA', description: 'Customes', flowCode: 'newFlow', flowDescription: 'secure flow', flowAction: 'download', fileType: 'JPG', fileSize: '5' },
    { name: 'Mari', description: 'Required', flowCode: 'newFlow', flowDescription: 'secure flow', flowAction: 'download', fileType: 'JPG', fileSize: '5' },
    { name: 'Area 2', description: 'Counsumer Area 2', flowCode: 'newFlow', flowDescription: 'secure flow', flowAction: 'download', fileType: 'JPG', fileSize: '5' }
]

const flows = [
    { name: 'Flow 1', description: 'Flow 1 description' },
    { name: 'Flow 2', description: 'Flow 2 description' },
    { name: 'Flow 3', description: 'Flow 3 description' },
    { name: 'Flow 4', description: 'Flow 4 description' }
]

export function getCustomers(): any[] {
    return customers;
}

export function getOes() {
    return [...OES];
}

export function getApplications() {
    return applications;
}


export function getFlows() {
    return flows;
}

