import React from 'react'
import UiButton from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'

const Button = ({ children, loading, icon = null, disabled = false, color = 'secondary', ...props }) => {
  return (
    <UiButton
      variant="contained"
      color={color}
      startIcon={loading ? <CircularProgress size={20} color={color}/> : icon}
      disabled={loading || disabled}
      {...props}
    >
      {children}
    </UiButton>
  )
}

export default Button
