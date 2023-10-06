import * as React from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from '@/lib/react-query'
import { NextUIProvider, Spinner } from '@nextui-org/react'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { config } from '@/config'

const ErrorFallback = () => {
  return (
    <div
      className="flex h-screen w-screen flex-col items-center justify-center text-red-500"
      role="alert"
    >
      <h2 className="text-lg font-semibold">Ooops, something went wrong</h2>
    </div>
  )
}

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <React.Suspense
      fallback={
        <div className="flex h-screen w-screen items-center justify-center">
          <Spinner />
        </div>
      }
    >
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <QueryClientProvider client={queryClient}>
          <NextUIProvider>
            {config.enviroment === 'development' && <ReactQueryDevtools />}
            {children}
          </NextUIProvider>
        </QueryClientProvider>
      </ErrorBoundary>
    </React.Suspense>
  )
}
