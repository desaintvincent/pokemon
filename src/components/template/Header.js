import React from 'react'
import UiToolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import styled from 'styled-components'
import UiAppBar from '@material-ui/core/AppBar'
import LoginHeadbar from '../login/LoginHeadbar'

const Title = styled(Typography)`
  flex-grow: 1;
`

const AppBar = styled(UiAppBar)`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  z-index: ${({ theme }) => theme.zIndex.drawer + 1};
  transition: ${({ theme }) => theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
})};
  
  ${props => props.open && `
    margin-left: ${props.theme.drawer.open}px;
    width: calc(100% - ${props.theme.drawer.open}px);
    transition: ${({ theme }) => theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen
})};
  `};
`

const Toolbar = styled(UiToolbar)`
  padding-left: 24px;
  padding-right: 24px;
`

export default function Header () {
  return (
    <AppBar color='transparent' position='relative'>
      <Toolbar position='fixed'>
        <Title variant='h6'>
                    Title
        </Title>
        <LoginHeadbar />
      </Toolbar>
    </AppBar>
  )
}
