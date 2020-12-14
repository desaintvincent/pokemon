import React from 'react'
import styled from 'styled-components'
import Header from './Header'
import Sidebar from './Sidebar'

const Content = styled.main`
  position: relative;
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

const Template = ({ children, empty = false }) => {
  const [open, setOpen] = React.useState(true)

  if (empty) {
    return (
      <Root>
        {children}
      </Root>
    )
  }

  const toogleSidebar = () => {
    setOpen(_open => !_open)
  }

  return (
    <Root>
      <Header open={open}/>
      <Sidebar toogleSidebar={toogleSidebar} open={open}/>
      <Content>
        <ContentOffset/>
        {children}
      </Content>
    </Root>
  )
}

export default Template
