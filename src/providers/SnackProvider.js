import React, { useCallback } from 'react'
import { SnackbarProvider, useSnackbar } from 'notistack'
import styled from 'styled-components'
import CloseIcon from '@material-ui/icons/Close'

const Pointer = styled.div`
  cursor: pointer;
`

const SnackProvider = ({ children }) => {
  const notistackRef = React.createRef()

  const onClose = key => () => {
    notistackRef.current.closeSnackbar(key)
  }
  return (
    <SnackbarProvider
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right'
      }}
      autoHideDuration={2000}
      ref={notistackRef}
      action={(key) => (
        <Pointer onClick={onClose(key)}> <CloseIcon/></Pointer>
      )}>
      {children}
    </SnackbarProvider>
  )
}

const SNACK = {
  DEFAULT: 'default',
  SUCCESS: 'success',
  ERROR: 'error',
  WARNING: 'warning',
  INFO: 'info'
}

const useSnack = () => {
  const { enqueueSnackbar } = useSnackbar()

  const snack = useCallback(
    (message, variant = SNACK.SUCCESS, params = {}) => {
      if (!message) {
        return
      }
      enqueueSnackbar(message, { variant: variant, ...params })
    },
    [enqueueSnackbar]
  )

  return snack
}

export default SnackProvider
export { useSnack, SNACK }
