import { create } from "zustand";
import { Cryptocurrency, Pair } from "./types";
import { fetchCurrentCryptoPrice, getCryptos } from "./services/CryptoService";

type CryptoStore = { 
    cryptocurrencies: Cryptocurrency[]
    fetchCryptos: () => Promise<void>
    fetchData: ( pair : Pair ) => Promise<void>
}

export const useCryptoStore = create<CryptoStore>(( set ) => ({ 
    cryptocurrencies: [],
    fetchCryptos: async() => { 
        const cryptocurrencies = await getCryptos()
        console.log("cryptoCurrencies" , cryptocurrencies )
        set(() => ({
            cryptocurrencies
        }))
    },
    fetchData: async( pair ) => { 
        const resultData = await fetchCurrentCryptoPrice( pair )
        console.log( resultData );
    }
}))