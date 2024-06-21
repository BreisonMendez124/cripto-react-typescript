import { useState } from "react";
import { currencies } from "../data";
import { useCryptoStore } from "../store";
import { Pair } from "../types";
import ErrorMessage from "./ErrorMessage";

export default function CriptoSearchForm(){ 
    const cryptoCurrency = useCryptoStore( ( state ) => state.cryptocurrencies )
    const fetchData = useCryptoStore( ( state ) => state.fetchData )
    const [ error , setError ] = useState('');
    const [ pair , setPair ] = useState<Pair>({
        currency:'',
        criptocurrency:""
    })

    const handleChange = ( e: React.ChangeEvent<HTMLSelectElement> ) => { 
        setPair({ 
            ...pair,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = ( e: React.FormEvent<HTMLFormElement>) => { 
        e.preventDefault();
        if( Object.values( pair ).includes('') ){ 
            setError('Todos los campos son obligatorios')
            return '';
        }
        setError('');
        fetchData( pair );

    }
    return ( 
        <form className="form" action="" onSubmit={ handleSubmit }>
            { error && <ErrorMessage> { error } </ErrorMessage>}
            <div className="field">
                <label htmlFor="currency">Moneda:</label>
                <select name="currency" 
                        id="currency" 
                        onChange={ handleChange }
                        value={ pair.currency }>
                    <option value="">-- Seleccione -- </option>
                    { currencies.map( currency => ( 
                        <option key={ currency.code } 
                                value={ currency.code }
                                >
                                { currency.name }
                        </option>
                    ))}
                </select>
            </div>

            <div className="field">
                <label htmlFor="currency">Criptomoneda:</label>
                <select name="criptocurrency" 
                        id="criptocurrency"
                        onChange={ handleChange }
                        value={ pair.criptocurrency } >
                    <option value="">-- Seleccione -- </option>
                    { cryptoCurrency.map( ( iterator ) => ( 
                        <option key={ iterator.CoinInfo.Name} 
                                value={ iterator.CoinInfo.Name }>
                            { iterator.CoinInfo.FullName }
                        </option>
                    ))}
                </select>
            </div>
            <input type="submit" value='Cotizar' />
        </form>
    )
}