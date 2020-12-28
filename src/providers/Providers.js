import React from 'react'
import ThemeProvider from './ThemeProvider'
import SnackProvider from './SnackProvider'
import AuthProvider from './AuthProvider'

const Providers = ({ children }) => {
  return (

    <AuthProvider>
      <ThemeProvider>
        <SnackProvider>
          {children}
        </SnackProvider>
      </ThemeProvider>
    </AuthProvider>
  )
}

export default Providers
