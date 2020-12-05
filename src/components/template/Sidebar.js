import React from 'react'
import clsx from 'clsx'
import IconButton from '@material-ui/core/IconButton'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import Divider from '@material-ui/core/Divider'
import Drawer from '@material-ui/core/Drawer'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import styled from 'styled-components'
import Menu from './Menu'

const useStyles = makeStyles((theme) => ({
  drawer: {
    height: '100vh',
    width: theme.drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap'
  },
  drawerOpen: {
    width: theme.drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    overflowX: 'hidden',
    width: theme.spacing(9) + 1
  }
}))

const ToolbarHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: ${({ theme }) => theme.spacing(0.1)}px;
  ${({ theme }) => (theme.mixins.toolbar)};
`

const Sidebar = ({ handleDrawerClose, open }) => {
  const classes = useStyles()
  const theme = useTheme()

  return (
    <Drawer
      variant='permanent'
      className={clsx(classes.drawer, {
        [classes.drawerOpen]: open,
        [classes.drawerClose]: !open
      })}
      classes={{
        paper: clsx({
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open
        })
      }}
    >
      <ToolbarHeader>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
        </IconButton>
      </ToolbarHeader>
      <Divider />
      <Menu />
    </Drawer>
  )
}

export default Sidebar
