import { AppProps } from 'next/app' 
import { ChakraProvider } from '@chakra-ui/react'
import{ theme } from '../styles/theme'
import { SidebarDraweProvider } from '../contexts/SidebarDrawerContext'
import { QueryClientProvider,QueryClient } from 'react-query'

import { makeServer } from '../services/mirage/'

if(process.env.NODE_ENV === 'development')
{
  makeServer();
}

const queryClient = new QueryClient()

function MyApp({ Component, pageProps } : AppProps) {
  return (
    <QueryClientProvider client ={queryClient}>
      <SidebarDraweProvider>
            <ChakraProvider  theme={theme}>
                <Component {...pageProps} />
            </ChakraProvider>
      </SidebarDraweProvider>
    </QueryClientProvider>

  )
}

export default MyApp
