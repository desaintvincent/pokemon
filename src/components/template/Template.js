import React from 'react'
import styled from 'styled-components'
import Header from './Header'
import Sidebar from './Sidebar'

const Content = styled.main`
  padding: ${({ theme }) => theme.spacing(3)}px;
  flex: 1;
`

const ContentOffset = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: ${({ theme }) => theme.spacing(0.1)}px;
  ${({ theme }) => (theme.mixins.toolbar)};
`

const Root = styled.div`
  display: flex;
  flex-direction: row;
`

const Template = ({ children }) => {
  const [open, setOpen] = React.useState(false)

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  return (
    <Root>
      <Header open={open} handleDrawerOpen={handleDrawerOpen} />
      <Sidebar handleDrawerClose={handleDrawerClose} open={open} />
      <Content>
        <ContentOffset />
        {children}
      </Content>
    </Root>
  )
}

export default Template
