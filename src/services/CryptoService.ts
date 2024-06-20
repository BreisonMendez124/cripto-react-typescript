import axios from "axios";
import { CryptoCurrenciesResponseSchema } from "../schemas";
import { parse } from "valibot";

export const getCryptos = async() => { 
    const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD';
    const { data: { Data } } = await axios.get(url);
    const result = parse( CryptoCurrenciesResponseSchema , Data )
    if(result){ 
        return result
    }
} 