import React from 'react'
import UIIconButton from '@material-ui/core/IconButton'
import UiDrawer from '@material-ui/core/Drawer'
import styled from 'styled-components'
import Menu from './Menu'
import MenuIcon from '@material-ui/icons/Menu'
import MenuOpenIcon from '@material-ui/icons/MenuOpen'
import logo from '../icons/logo.svg'
import Link from "../../routing/Link";
import ROUTE from "../../routing/constants";

const Drawer = styled(UiDrawer)`
  height: 100vh;
  flex-shrink: 0;
  white-space: nowrap;
  width: ${props => props.open ? props.theme.drawer.open : props.theme.drawer.closed}px;

  transition: ${({ theme }) => theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen
  })};
  
  > div {
    width: ${props => props.open ? props.theme.drawer.open : props.theme.drawer.closed}px;
    background-color: ${props => props.theme.palette.primary.main};
    overflow-x: hidden;
    transition: ${({ theme }) => theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })};
  }
`

const ToolbarHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: ${({ theme }) => theme.spacing(0.1)}px;
  ${({ theme }) => (theme.mixins.toolbar)};
`

const IconButton = styled(UIIconButton)`
  width: ${props => props.theme.drawer.closed}px;
  height: 100%;
  border-radius: 0;
  color: ${props=> props.theme.white};
`

const Logo = styled.div`
    height: 100%;
  flex: 1;
  display: flex;
  align-items: center;
  
  img {
    width: 100%;
  }
`

const Sidebar = ({open, toogleSidebar}) => {
  return (
    <Drawer open={open} variant='permanent'>
      <ToolbarHeader>
          <Link to={ROUTE.HOME}>
              <Logo><img src={logo} alt="logo"/></Logo>
          </Link>
        <IconButton onClick={toogleSidebar}>
          {open ? <MenuOpenIcon /> : <MenuIcon />}
        </IconButton>
      </ToolbarHeader>
      <Menu />
    </Drawer>
  )
}

export default Sidebar
