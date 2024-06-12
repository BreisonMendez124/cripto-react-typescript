import * as v from 'valibot'

export const CurrencySchema = v.object( { 
    code: v.string(),
    name: v.string()
})