import '@/styles/globals.scss'
import { StrictMode } from 'react'
import { GoogleTagManager } from '@next/third-parties/google'
import HolyLoader from 'holy-loader'
import { type Metadata, type Viewport } from 'next'
import Providers from './providers'
import DeleteConfirmationDialog from '@/components/dialog/delete-confirmation-dialog'
import Header from '@/components/header'
import PreloadResources from '@/components/preload-resources'
import ScrollTopButton from '@/components/scroll-top-button'
import TailwindIndicator from '@/components/tailwind-indicator'
import { env } from '@/lib/config'

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#030712' },
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
  ],
  colorScheme: 'dark light',
  width: 'device-width',
  initialScale: 1.0,
  viewportFit: 'cover',
}

export const metadata: Metadata = {
  metadataBase: new URL(env.NEXT_PUBLIC_HOST),
  title: '',
  applicationName: '',
  description: '',
  openGraph: {
    title: '',
    siteName: '',
    description: '',
    type: 'website',
    images: [''],
  },
  icons: [
    {
      rel: 'icon',
      url: '/favicon-16x16.png',
      sizes: '16x16',
      type: 'image/png',
    },
    {
      rel: 'icon',
      url: '/favicon-32x32.png',
      sizes: '32x32',
      type: 'image/png',
    },
    {
      url: '/android-chrome-192x192.png',
      sizes: '192x192',
      type: 'image/png',
    },
    {
      url: '/android-chrome-512x512.png',
      sizes: '512x512',
      type: 'image/png',
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StrictMode>
      <PreloadResources />
      <html lang='jp' suppressHydrationWarning>
      <body>
        <HolyLoader
          color="#9333ea"
          height="1px"
          easing="linear"
        />
        <Providers>
          <div className='flex flex-col w-full min-h-screen overflow-y-auto'>
            <Header />
            <main className='flex flex-col w-full min-h-[calc(100dvh_-_80px)] mt-20'>
              {children}
            </main>
            <ScrollTopButton />
          </div>

          {env.NEXT_PUBLIC_APP_ENV === 'production' ? (
            <GoogleTagManager gtmId={env.NEXT_PUBLIC_GOOGLE_GTM_ID || ''} />
          ) : (
            <TailwindIndicator />
          )}
          <DeleteConfirmationDialog />
        </Providers>        
      </body>
    </html>
    </StrictMode>
  )
}