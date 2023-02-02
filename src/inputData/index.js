export const inputData = [
    {
        name: 'backblaze',
        color: 'brown',
        minPayment: 7,
        priceStorage: 0.005,
        priceTransfer: 0.01
    },
    {
        name: 'bunnynet',
        color: 'orange',
        maxPayment: 10,
        priceStorage: { hdd: 0.01, ssd: 0.02 }, 
        priceTransfer: 0.01
    },
    {
        name: 'scaleway',
        color: 'slateblue',
        priceStorage: { multi: 0.06, single: 0.03 },
        freeStorage: 75,
        freeTransfer: 75,
        priceTransfer: 0.02
    },
    {
        name: 'vultr',
        color: 'cornflowerblue',
        minPayment: 5,
        priceStorage: 0.01,
        priceTransfer: 0.01
    }
]
