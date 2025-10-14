'use client'

// Since QueryClientProvider relies on useContext under the hood, we have to put 'use client' on top
import { type PropsWithChildren } from 'react'
import { QueryClientProvider } from '@tanstack/react-query'
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { getQueryClient } from '@/app/get-query-client'

export default function ReactQueryProvider({ children }: PropsWithChildren) {
  const queryClient = getQueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </QueryClientProvider>
  )
}
