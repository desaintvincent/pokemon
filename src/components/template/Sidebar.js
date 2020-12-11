import React from 'react'
import UIIconButton from '@material-ui/core/IconButton'
import UiDrawer from '@material-ui/core/Drawer'
import styled from 'styled-components'
import Menu from './Menu'
import MenuIcon from '@material-ui/icons/Menu'
import MenuOpenIcon from '@material-ui/icons/MenuOpen'

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
`

const Sidebar = () => {
  const [open, setOpen] = React.useState(false)

  const toogleSidebar = () => {
    setOpen(_open => !_open)
  }

  return (
    <Drawer open={open} variant='permanent'>
      <ToolbarHeader>
        <IconButton onClick={toogleSidebar}>
          {open ? <MenuOpenIcon color="white.main"/> : <MenuIcon color="white"/>}
        </IconButton>
      </ToolbarHeader>
      <Menu />
    </Drawer>
  )
}

export default Sidebar
