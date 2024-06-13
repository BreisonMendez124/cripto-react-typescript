import * as v from 'valibot'

export const CurrencySchema = v.object( { 
    code: v.string(),
    name: v.string()
})

export const CryptoCurrencyResponseSchema = v.object( { 
        CoinInfo: v.object({ 
            FullName: v.string(),    
            Name: v.string()
        })
    })

export const CryptoCurrenciesResponseSchema = v.array( CryptoCurrencyResponseSchema );