import '@/styles/globals.scss'
import { env } from '@/lib/config';
import { type Metadata } from 'next'

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
    <html lang='jp'>
      <body>
        {children}
      </body>
    </html>
  )
}
