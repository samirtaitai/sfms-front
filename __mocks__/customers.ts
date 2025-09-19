const customers = [
    { name: 'BMP', description: 'BMP', id: '1' }
];

const OES = [
    { name: 'GERMANY', code: 'DE', debtor: '1111' }
]

const applications = [
    { name: 'BPM_SFMS_TEST', description: 'BPM test application', id: '1' }
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


