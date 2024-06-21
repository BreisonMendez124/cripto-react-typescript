import { object , string , array } from 'valibot'

export const CurrencySchema = object( { 
    code: string(),
    name: string()
})

export const CryptoCurrencyResponseSchema = object( { 
        CoinInfo: object({ 
            FullName: string(),    
            Name: string()
        })
    })

export const CryptoCurrenciesResponseSchema = array( CryptoCurrencyResponseSchema );

export const PairSchema = object({ 
    currency: string(),
    criptocurrency: string()
})

export const CryptoPriceSchema = object( { 
    IMAGEURL: string(),
    PRICE: string(),
    HIGHDAY: string(),
    LOWDAY: string(),
    CHANGEPCT24HOUR: string(),
    LASTUPDATE: string()
})