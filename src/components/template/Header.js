import React from 'react'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import styled from 'styled-components'
import OriginalAppBar from '@material-ui/core/AppBar'
import LoginHeadbar from '../login/LoginHeadbar'

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
        <LoginHeadbar />
      </Toolbar>
    </AppBar>
  )
}
