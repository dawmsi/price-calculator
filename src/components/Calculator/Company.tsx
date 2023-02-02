import React, { useEffect, useState } from 'react'
import { ProgressBar, Button } from 'react-bootstrap'

interface IProps {
    storage: number
    transfer: number
    minValue: number
    setMinValue: Function
    maxValue: number
    setMaxValue: Function
    prices: any
    index: number

    name: string
    color: string
    priceStorage: number | object
    priceTransfer: number
    minPayment?: number
    maxPayment?: number
    freeTransfer?: number
    freeStorage?: number
}

export const Company: React.FC<IProps> = ({
    storage,
    transfer,
    minValue,
    setMinValue,
    maxValue,
    setMaxValue,
    prices,
    index,

    name,
    color,
    priceStorage,
    priceTransfer,
    minPayment,
    maxPayment,
    freeTransfer,
    freeStorage
}) => {
    const [storageSwitcher, setStorageSwitcher] = useState(false)
    const [price, setPrice] = useState(0)

    const roundNumber = (longNumber: number): number => {
        return Number(longNumber.toFixed(2))
    }

    const minMaxPayment = (
        _price: number,
        _min: number | undefined = minPayment,
        _max: number | undefined = maxPayment
    ): number => {
        if (_min && _price !== 0 && _price < _min) return _min

        if (_max && _price !== 0 && _price > _max) return _max

        return _price
    }

    function formulaCalculatePrice(
        _priceStorage: number,
        _storage: number,
        _priceTransfer: number,
        _transfer: number
    ): number {
        return roundNumber(
            _priceStorage * _storage + _priceTransfer * _transfer
        )
    }

    function formulaFree(
        _freeStorage: number,
        _freeTransfer: number,
        _priceStorage: number,
        _storage: number,
        _priceTransfer: number,
        _transfer: number
    ): number {
        return roundNumber(
            _priceStorage * (_storage - _freeStorage) +
            _priceTransfer * (_transfer - _freeTransfer)
        )
    }

    const calculatePrices = (): number => {
        let tempPriceStorage: number | object

        if (typeof priceStorage === 'number') {
            tempPriceStorage = priceStorage
        } else {
            tempPriceStorage =
                priceStorage[
                Object.keys(priceStorage)[
                Number(storageSwitcher)
                ] as keyof object
                ]
        }

        if (freeStorage || freeTransfer) {
            if (storage < freeStorage) tempPriceStorage = 0
            if (transfer < freeTransfer) priceTransfer = 0
            return formulaFree(
                freeStorage,
                freeTransfer,
                tempPriceStorage,
                storage,
                priceTransfer,
                transfer
            )
        }

        return formulaCalculatePrice(
            tempPriceStorage,
            storage,
            priceTransfer,
            transfer
        )
    }
    useEffect(() => {
        setPrice(minMaxPayment(calculatePrices()))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [storage, transfer, storageSwitcher])

    useEffect(() => {
        prices.current[index] = price
        setMinValue(Math.min.apply(null, prices.current))
        setMaxValue(Math.max.apply(null, prices.current))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [price])

    return (
        <div
            style={{
                display: 'flex',
                gap: '8px',
                width: '100%'
            }}
        >
            <h5
                style={{
                    minWidth: '80px',
                    color: `${price === minValue ? color : 'gray'}`
                }}
            >
                {name}
            </h5>
            <img
                src={process.env.PUBLIC_URL + `/logos/${name}.svg`}
                alt="logo"
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '30px',
                    height: '30px'
                }}
            />
            <h6>{price + ' $'}</h6>
            <div
                style={{
                    height: '100%',
                    width: '100%',
                    paddingTop: '8px'
                }}
            >
                <ProgressBar
                    className={`${price === minValue ? color : 'gray'}`}
                    max={maxValue}
                    now={price}
                    style={{
                        backgroundColor: `${'#dee2e6'}`,
                        width: '100%',
                        left: '0'
                    }}
                ></ProgressBar>
            </div>
            {typeof priceStorage === 'object' ? (
                <Button
                    variant="dark"
                    style={{
                        height: '18px',
                        padding: '0 2px',
                        margin: '7px auto',
                        lineHeight: '16px',
                        width: '90px'
                    }}
                    onClick={() => setStorageSwitcher(!storageSwitcher)}
                >
                    {Object.keys(priceStorage)[Number(storageSwitcher)]}
                </Button>
            ) : (
                ''
            )}
        </div>
    )
}
