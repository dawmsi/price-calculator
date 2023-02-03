export const localDB = JSON.stringify({
    companies: [
        {
            icon: 'https://raw.githubusercontent.com/dawmsi/mocki/19d44a23fd3a1b25a4ab755a2a0885a9c3642b6b/backblaze.svg',
            name: 'backblaze',
            color: 'brown',
            minPayment: 7,
            priceStorage: 0.005,
            priceTransfer: 0.01
        },
        {
            icon: 'https://raw.githubusercontent.com/dawmsi/mocki/19d44a23fd3a1b25a4ab755a2a0885a9c3642b6b/bunnynet.svg',
            name: 'bunnynet',
            color: 'orange',
            maxPayment: 10,
            priceStorage: {
                hdd: 0.01,
                ssd: 0.02
            },
            priceTransfer: 0.01
        },
        {
            icon: 'https://raw.githubusercontent.com/dawmsi/mocki/19d44a23fd3a1b25a4ab755a2a0885a9c3642b6b/scaleway.svg',
            name: 'scaleway',
            color: 'slateblue',
            priceStorage: {
                multi: 0.06,
                single: 0.03
            },
            freeStorage: 75,
            freeTransfer: 75,
            priceTransfer: 0.02
        },
        {
            icon: 'https://raw.githubusercontent.com/dawmsi/mocki/19d44a23fd3a1b25a4ab755a2a0885a9c3642b6b/vultr.svg',
            name: 'vultr',
            color: 'cornflowerblue',
            minPayment: 5,
            priceStorage: 0.01,
            priceTransfer: 0.01
        }
    ]
})
