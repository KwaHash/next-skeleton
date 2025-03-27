'use client'

import ReactDOM from 'react-dom'
import { env } from '@/lib/config'

const PreloadResources =() => {
  if (env.NEXT_PUBLIC_APP_ENV === 'production') {
    ReactDOM.preconnect('https://www.googletagmanager.com', { crossOrigin: 'anonymous' })
  }
  return null
}

export default PreloadResources