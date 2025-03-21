import '@/styles/globals.scss'
import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: '',
  description: '',
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
