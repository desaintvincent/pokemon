import React from 'react'
import { fetcher } from '../api/api'
import { SWRConfig } from 'swr'
import ThemeProvider from './ThemeProvider'
import SnackProvider from './SnackProvider'

const Providers = ({ children }) => {
  return (
    <SWRConfig value={{ fetcher }}>
      <ThemeProvider>
        <SnackProvider>
          {children}
        </SnackProvider>
      </ThemeProvider>
    </SWRConfig>
  )
}

export default Providers
