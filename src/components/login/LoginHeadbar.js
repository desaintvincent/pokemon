import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import AccountCircle from '@material-ui/icons/AccountCircle'
import MenuItem from '@material-ui/core/MenuItem'
import Menu from '@material-ui/core/Menu'
import useAuth from '../../api/auth'

const LoginHeadbar = () => {
  const { logged } = useAuth()
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)

  if (!logged) {
    return null
  }

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleLogout = () => {
    setAnchorEl(null)
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
