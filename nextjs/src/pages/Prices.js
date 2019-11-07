import {useState} from 'react';
const Prices = props => {
    const [ currency, setCurrency] = useState('USD');
    const currencyData = props.bpi[currency];
    return (
        <div>
            <select onChange={(e) => setCurrency(e.target.value)}>
                <option value="USD">USD</option>
                <option value="GBP">GBP</option>
                <option value="EUR">EUR</option>
            </select>
            <ul>
                <li> Bitcoin rate for {currencyData.description} : {currencyData.code} : <strong>{currencyData.rate}</strong></li>
            </ul>
        </div>
    );
};

export default Prices;