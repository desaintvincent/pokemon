import React, { createContext, useContext, useEffect, useState } from 'react'
import UiTabList from '@material-ui/core/Tabs'
import UiTab from '@material-ui/core/Tab'
import styled from 'styled-components'
import { useHistory, useLocation } from 'react-router-dom'

const TabContext = createContext({})

const useTab = () => {
  return useContext(TabContext)
}

const TabPanelContainer = styled.div`
  padding: ${({ theme }) => theme.spacing(3)}px;
`

const Tabs = ({ children, className = '', defaultSelected }) => {
  const [selected, setSelected] = useState(defaultSelected)
  const history = useHistory()
  const { hash } = useLocation()

  const onSelectTab = (event, newValue) => {
    history.push({
      hash: newValue
    })
  }

  useEffect(() => {
    if (hash) {
      setSelected(hash[0] === '#' ? hash.substring(1) : hash)
    } else {
      setSelected(defaultSelected)
    }
  }, [hash, defaultSelected])

  return (
    <div className={className}>
      <TabContext.Provider value={{
        selected,
        onSelectTab
      }}>
        {children}
      </TabContext.Provider>
    </div>
  )
}

const TabPanel = ({ value, children, className = '' }) => {
  const { selected } = useTab()

  if (value !== selected) {
    return null
  }
  return (
    <TabPanelContainer role="tabpanel" className={className}>
      {children}
    </TabPanelContainer>
  )
}

const Tab = UiTab

const TabList = ({ children, ...props }) => {
  const { selected, onSelectTab } = useTab()
  return <UiTabList {...props} onChange={onSelectTab} value={selected} >{children}</UiTabList>
}

export { TabList, Tab, Tabs, TabPanel }
