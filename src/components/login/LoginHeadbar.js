import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import AccountCircle from '@material-ui/icons/AccountCircle'
import MenuItem from '@material-ui/core/MenuItem'
import Menu from '@material-ui/core/Menu'
import { useHistory } from 'react-router'
import ROUTE from '../../routing/constants'
import { useAuth } from '../../providers/AuthProvider'
import { logout } from '../../api/auth'
import useSubmit from '../../api/useSubmit'

const LoginHeadbar = () => {
  const { logged, authenticate, refreshToken } = useAuth()
  const history = useHistory()
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)

  const goToLoginPage = () => {
    history.push(ROUTE.LOGIN)
  }

  const { submit } = useSubmit(logout)

  if (!logged) {
    return (
      <IconButton
        aria-controls='menu-appbar'
        aria-haspopup='true'
        onClick={goToLoginPage}
        color='inherit'
      >
        <AccountCircle />
      </IconButton>
    )
  }

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleLogout = () => {
    submit({ refreshToken }).then(() => {
      authenticate({})
      setAnchorEl(null)
    })
  }

  return <>
    <IconButton
      aria-label='account of current user'
      aria-controls='menu-appbar'
      aria-haspopup='true'
      onClick={handleMenu}
      color='inherit'
    >
      <AccountCircle />
    </IconButton>
    <Menu
      id="menu-appbar"
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right'
      }}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right'
      }}
      open={open}
      onClose={handleClose}
    >
      <MenuItem onClick={handleClose}>Profile</MenuItem>
      <MenuItem onClick={handleLogout}>Logout</MenuItem>
    </Menu>
  </>
}

export default LoginHeadbar
