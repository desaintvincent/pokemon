import React, { createContext, useContext, useState } from 'react'
import UiTabList from '@material-ui/core/Tabs'
import UiTab from '@material-ui/core/Tab'
import {useHistory} from "react-router-dom";

const TabContext = createContext({})

const useTab = () => {
  return useContext(TabContext)
}

const Tabs = ({ children }) => {
  const [selected, setSelected] = useState(0)
  const history = useHistory();

  const onSelectTab = (event, newValue) => {
    const id = event.target.id
    if (id) {
      history.push({
        hash: `#${id}`
      });
    }
    setSelected(newValue)
  }

  return (
    <TabContext.Provider value={{
      selected,
      onSelectTab
    }}>
      {children}
    </TabContext.Provider>
  )
}

const TabPanel = ({ index, selected, children }) => {
  if (index !== selected) {
    return null
  }
  return (
    <div role="tabpanel">
      {selected}{index}{children}
    </div>
  )
}

const Tab = ({label, id, ...props}) => {
  return  <UiTab {...props} label={<span id={id}>{label}</span>}/>
}

const TabList = ({children, ...props}) => {
  const { selected, onSelectTab } = useTab()
  return <UiTabList {...props} onChange={onSelectTab} value={selected} >{children}</UiTabList>
}

const TabBody = ({ children }) => {
  const { selected } = useTab()
  return (
    <div>
      {React.Children.toArray(children).map((child, index) => React.cloneElement(child, { index, selected }))}
    </div>
  )
}

export { TabList, Tab, Tabs, TabPanel, TabBody }
