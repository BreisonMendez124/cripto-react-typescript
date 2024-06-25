import { create } from "zustand";
import { CryptoPrice, Cryptocurrency, Pair } from "./types";
import { fetchCurrentCryptoPrice, getCryptos } from "./services/CryptoService";

type CryptoStore = { 
    cryptocurrencies: Cryptocurrency[]
    loading: Boolean
    result: CryptoPrice
    fetchCryptos: () => Promise<void>
    fetchData: ( pair : Pair ) => Promise<void>
}

export const useCryptoStore = create<CryptoStore>(( set ) => ({ 
    cryptocurrencies: [],
    loading: false,
    result: {} as CryptoPrice,
    fetchCryptos: async() => { 
        const cryptocurrencies = await getCryptos()
        console.log("cryptoCurrencies" , cryptocurrencies )
        set(() => ({
            cryptocurrencies
        }))
    },
    fetchData: async( pair ) => { 
        set( () => ({ 
            loading: true
        }))
        const result = await fetchCurrentCryptoPrice( pair )
        set( () => ({ 
            result,
            loading: false
        }))
    }
}))