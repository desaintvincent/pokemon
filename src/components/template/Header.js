import React from 'react'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import AccountCircle from '@material-ui/icons/AccountCircle'
import styled from 'styled-components'
import OriginalAppBar from '@material-ui/core/AppBar'

const Title = styled(Typography)`
  flex-grow: 1;
`

const AppBar = styled(OriginalAppBar)`
  z-index: ${({ theme }) => theme.zIndex.drawer + 1};
  transition: ${({ theme }) => theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
})};
  
  ${props => props.open && `
    margin-left: ${props.theme.drawerWidth}px;
    width: calc(100% - ${props.theme.drawerWidth}px);
    transition: ${({ theme }) => theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen
})};
  `};
`

const MenuButton = styled(IconButton)`
  margin-right: 36px;
  display: ${({ open }) => open ? 'none' : 'block'};
`

export default function Header ({ open = false, handleDrawerOpen }) {
  const [auth] = React.useState(true)

  return (
    <AppBar open={open}>
      <Toolbar position='fixed'>
        <MenuButton
          color='inherit'
          aria-label='open drawer'
          onClick={handleDrawerOpen}
          open={open}
          edge='start'
        >
          <MenuIcon />
        </MenuButton>
        <Title variant='h6'>
                    Title
        </Title>
        {auth && (
          <div>
            <IconButton
              aria-label='account of current user'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={() => {}}
              color='inherit'
            >
              <AccountCircle />
            </IconButton>
            {/*
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={open}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={handleClose}>Profile</MenuItem>
                            <MenuItem onClick={handleClose}>My account</MenuItem>
                        </Menu>
                        */}
          </div>
        )}
      </Toolbar>
    </AppBar>
  )
}
