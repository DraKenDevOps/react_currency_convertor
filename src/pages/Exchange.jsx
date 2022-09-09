import React,{useState} from 'react'
import { exchange } from '../services/exchangeRate'

const Exchange = () => {
    const [value, setValue] = useState({
        amount: "",
        currency: ""
    })

    const [result, setResult] = useState(0)

    const handleChange = (e) => {
        setValue({
            ...value,
            [e.target.name]: e.target.value
        })
    }

    const handleClick = () => {
        setResult(value.amount * value.currency)
    }

    let lastResult = Math.floor(result/1000)*1000

    return (
        <>
            <h1>Currency</h1>

            <label htmlFor="amt">Amount</label>
            <br />
            <input type="number" id="amt" name="amount" min={0} onChange={handleChange}/>
            <br />
            <label htmlFor="cur">Currency</label>
            <br />
            <select name="currency" id="cur" onChange={handleChange}>
                <option value="0" selected disabled> ---- Choose Currency ---- </option>
                {exchange.map(c => (
                    <option value={c.sell} key={c.currency}>{c.currency}</option>
                ))}
            </select>

            <br />
            <button onClick={handleClick}>Calculate</button>&nbsp;
            <h1>Result: {lastResult.toLocaleString()} LAK</h1>
        </>
    )
}

export default Exchange