import React from 'react'
import { fetcher } from '../api/api'
import { SWRConfig } from 'swr'
import ThemeProvider from './ThemeProvider'
import SnackProvider from './SnackProvider'
import AuthProvider from './AuthProvider'

const Providers = ({ children }) => {
  return (
    <AuthProvider>
      <SWRConfig value={{ fetcher }}>
        <ThemeProvider>
          <SnackProvider>
            {children}
          </SnackProvider>
        </ThemeProvider>
      </SWRConfig>
    </AuthProvider>
  )
}

export default Providers
