import React from 'react'
import { fetcher } from '../api/api'
import { SWRConfig } from 'swr'
import ThemeProvider from './ThemeProvider'
import { SnackbarProvider } from 'notistack'

const Providers = ({ children }) => {
  const notistackRef = React.createRef()
  const onClickDismiss = key => () => {
    notistackRef.current.closeSnackbar(key)
  }
  return <SWRConfig
    value={{
      fetcher
    }}
  >
    <ThemeProvider>
      <SnackbarProvider
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }} ref={notistackRef}
        action={(key) => (
          <button onClick={onClickDismiss(key)}>
            Dismiss
          </button>
        )}>
        {children}
      </SnackbarProvider>
    </ThemeProvider>
  </SWRConfig>
}

export default Providers
