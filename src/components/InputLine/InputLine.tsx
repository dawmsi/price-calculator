import { Col, Form } from 'react-bootstrap'

export const InputLine = ({ label, maxGB, valueGB, stateFunc }) => {
    function getRangeValue(e: any): number {
        return Number(e.target.value)
    }
    return (
        <Col sm={6}>
            <datalist id="defaultNumbers">
                <option value="50" key="50" />
                <option value="100" key="100" />
                <option value="200" key="200" />
                <option value="300" key="300" />
                <option value="1000" key="1000" />
            </datalist>
            <Form.Label style={{ display: 'flex', gap: '6px' }}>
                {label} :
                <input
                    autoComplete="on"
                    className="form-control"
                    step={1}
                    min={0}
                    max={maxGB}
                    list="defaultNumbers"
                    type="number"
                    value={valueGB > maxGB ? maxGB : valueGB}
                    onChange={(e) => stateFunc(getRangeValue(e))}
                    style={{
                        width: 'auto',
                        height: '22px',
                        margin: '2px',
                        fontSize: '15px',
                        textAlign: 'center'
                    }}
                />
                GB
            </Form.Label>
            <Form.Range
                className="custom-rang"
                max={maxGB}
                value={valueGB}
                onChange={(e) => stateFunc(getRangeValue(e))}
            />
        </Col>
    )
}
