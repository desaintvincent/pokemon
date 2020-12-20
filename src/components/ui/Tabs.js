import React, { createContext, useContext, useState } from 'react'
import TabList from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

const TabContext = createContext({})

const useTab = () => {
  return useContext(TabContext)
}

const Tabs = ({ children }) => {
  const [selected, setSelected] = useState(0)

  const onSelectTab = (event, newValue) => {
    console.log(event, newValue)
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
      {React.Children.toArray(children).map((child, index) => (
          <div>
            patate
            {index}
            {child}
          </div>
      ))}
    </div>
  )
}

/*


React.cloneElement(
  element,
  [props],
  [...children]
)

 */

const TabBody = ({ children }) => {
  return (
      <div>
        {children}
      </div>
  )
}

export { TabList, Tab, Tabs, TabPanel, TabBody }
