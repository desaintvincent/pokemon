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

const Template = ({ children }) => {
  return (
    <Root>
      <Sidebar />
      <Content>
        <Header/>
        <ContentOffset />
        {children}
      </Content>
    </Root>
  )
}

export default Template
