import 'dotenv/config'
import { OpenAI } from 'openai'
import { env } from 'process'

export const openai = new OpenAI({
    apiKey: process.env.OPENAI_KEY,
})