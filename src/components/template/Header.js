import React from 'react'
import UiToolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import styled from 'styled-components'
import UiAppBar from '@material-ui/core/AppBar'
import LoginHeadbar from '../login/LoginHeadbar'

const Title = styled(Typography)`
  flex-grow: 1;
`

const AppBar = styled(UiAppBar)`
  background-color: ${props => props.theme.white};
  margin-left: ${props => props.theme.drawer.closed}px;
  width: calc(100% - ${props => props.theme.drawer.closed}px);
  z-index: ${({ theme }) => theme.zIndex.drawer + 1};
  transition: ${({ theme }) => theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen
  })};

  ${props => props.open && `
    margin-left: ${props.theme.drawer.open}px;
    width: calc(100% - ${props.theme.drawer.open}px);
  `};
`

const Toolbar = styled(UiToolbar)`
  padding-left: 24px;
  padding-right: 24px;
`

export default function Header ({ open }) {
  return (
    <AppBar position="fixed" open={open}>
      <Toolbar>
        <Title variant='h6'>Title</Title>
        <LoginHeadbar/>
      </Toolbar>
    </AppBar>
  )
}
