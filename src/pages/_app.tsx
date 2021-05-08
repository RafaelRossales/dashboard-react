import { AppProps } from 'next/app' 
import { ChakraProvider } from '@chakra-ui/react'
import{ theme } from '../styles/theme'
import { SidebarDraweProvider } from '../contexts/SidebarDrawerContext'

function MyApp({ Component, pageProps } : AppProps) {
  return (
    <SidebarDraweProvider>
          <ChakraProvider  theme={theme}>
              <Component {...pageProps} />
          </ChakraProvider>
    </SidebarDraweProvider>
  )
}

export default MyApp
