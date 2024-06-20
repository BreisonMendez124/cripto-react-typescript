import { create } from "zustand";
import { Cryptocurrency } from "./types";
import { getCryptos } from "./services/CryptoService";

type CryptoStore = { 
    cryptocurrencies: Cryptocurrency[]
    fetchCryptos: () => Promise<void>
}

export const useCryptoStore = create<CryptoStore>(( set ) => ({ 
    cryptocurrencies: [],
    fetchCryptos: async() => { 
        const cryptocurrencies = await getCryptos()
        console.log("cryptoCurrencies" , cryptocurrencies )
        set(() => ({
            cryptocurrencies
        }))
    }
}))