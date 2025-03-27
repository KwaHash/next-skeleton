import { type PropsWithChildren } from 'react'
import ReduxProvider from '@/providers/redux-provider'
import { ThemeProvider } from '@/providers/theme-provider'

export default function Providers({ children }: PropsWithChildren) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      <ReduxProvider>{children}</ReduxProvider>
    </ThemeProvider>
  )
}