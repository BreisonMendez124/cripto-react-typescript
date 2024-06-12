import { InferInput } from 'valibot'
import { CurrencySchema } from '../schemas'

export type Currency =  InferInput< typeof CurrencySchema >