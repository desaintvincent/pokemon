import React from 'react'
import ThemeProvider from './ThemeProvider'
import SnackProvider from './SnackProvider'
import AuthProvider from './AuthProvider'
import IntlProvider from './IntlProvider'

const Providers = ({ children }) => {
  return (
    <IntlProvider>
      <AuthProvider>
        <ThemeProvider>
          <SnackProvider>
            {children}
          </SnackProvider>
        </ThemeProvider>
      </AuthProvider>
    </IntlProvider>
  )
}

export default Providers
