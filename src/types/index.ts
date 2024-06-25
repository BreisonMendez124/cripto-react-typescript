import { InferInput } from 'valibot'
import { CurrencySchema , CryptoCurrencyResponseSchema, PairSchema, CryptoPriceSchema } from '../schemas'

export type Currency =  InferInput< typeof CurrencySchema >
export type Cryptocurrency = InferInput< typeof CryptoCurrencyResponseSchema >
export type Cryptocurrenies = InferInput< typeof CryptoCurrencyResponseSchema >
export type Pair = InferInput< typeof PairSchema >
export type CryptoPrice = InferInput< typeof CryptoPriceSchema >