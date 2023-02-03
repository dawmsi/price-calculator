import { ReactNode, useEffect, useRef, useState } from 'react'
import { Button, Row } from 'react-bootstrap'
import { localDB } from '../../localDB'
import { Company } from './Company'
import { InputValue } from './InputValue'

export const Calculator = () => {
    const inputData = useRef(JSON.parse(localDB).companies)

    const [storage, setStorage] = useState<number>(0)
    const [transfer, setTransfer] = useState<number>(0)
    const [minValue, setMinValue] = useState<number>(0)
    const [maxValue, setMaxValue] = useState<number>(0)

    const prices = useRef([])

    const maxGB = 1000

    async function getData(_var, _local = localDB) {
        fetch('https://my-json-server.typicode.com/dawmsi/mocki/db')
            .then((response) => response.json())
            .then((data) => {
                _var = [...data.companies]
            })
            .catch((error) => {
                if (_local) _var = [..._local]
                console.log(error)
            })
    }

    useEffect(() => {
        getData(inputData.current)
    }, [])

    return (
        <Row
            style={{
                width: '88%',
                margin: '20px auto',
                padding: '6px',
                borderRadius: '12px',
                backgroundColor: '#f0f0f0',
                boxShadow: '0px 0px 9px -3px'
            }}
        >
            <InputValue
                key={'storage'}
                label="Storage"
                maxGB={maxGB}
                valueGB={storage}
                stateFunc={setStorage}
            />

            <InputValue
                key={'transfer'}
                label="Transfer"
                maxGB={maxGB}
                valueGB={transfer}
                stateFunc={setTransfer}
            />

            <Row>
                {inputData.current.map((item, index): ReactNode => {
                    return (
                        <Company
                            key={item.name}
                            storage={storage}
                            transfer={transfer}
                            minValue={minValue}
                            setMinValue={setMinValue}
                            maxValue={maxValue}
                            setMaxValue={setMaxValue}
                            prices={prices}
                            index={index}
                            {...item}
                        />
                    )
                })}
            </Row>
            <Row style={{ width: '100%' }}>
                <Button
                    variant="warning"
                    href="https://t.me/DAoFFl"
                    target="_blank"
                    rel="noreferrer"
                    style={{
                        margin: '12px auto',
                        padding: '6px 12px',
                        width: 'auto'
                    }}
                    size="sm"
                >
                    Sign a contract
                </Button>
            </Row>
        </Row>
    )
}
