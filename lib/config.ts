import * as process from 'process'

export const env = {
  NEXT_PUBLIC_APP_ENV: process.env.NEXT_PUBLIC_APP_ENV || 'staging',
  NEXT_PUBLIC_HOST: process.env.NEXT_PUBLIC_HOST || 'http://localhost:3000',
  
  // serverRuntimeConfig
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || '',
}