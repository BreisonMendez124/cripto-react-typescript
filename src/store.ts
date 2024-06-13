import axios from "axios";
import { create } from "zustand";
import { CryptoCurrenciesResponseSchema } from "./schemas";
import { parse } from "valibot";

const getCryptos = async() => { 
    const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD';
    const { data: { Data } } = await axios.get(url);
    const result = parse( CryptoCurrenciesResponseSchema , Data )
    console.log( result )
}

export const useCryptoStore = create(() => ({ 
    fetchCryptos: () => { 
        getCryptos()
    }
}))