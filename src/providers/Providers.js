import React from 'react'
import { fetcher } from '../api/api'
import { SWRConfig } from 'swr'
import ThemeProvider from './ThemeProvider'

const Providers = ({ children }) => {
  return <SWRConfig
    value={{
      fetcher
    }}
  >
    <ThemeProvider>
      {children}
    </ThemeProvider>
  </SWRConfig>
}

export default Providers
