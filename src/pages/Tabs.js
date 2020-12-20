import React from 'react'
import Typography from '@material-ui/core/Typography'
import { Tab, TabBody, TabList, TabPanel, Tabs } from '../components/ui/Tabs'

const PageTabs = () => {
  return (
    <>
      <Typography variant="h4">Tabs</Typography>
      <Tabs>
        <TabList>
          <Tab title='one' label="Item One" />
          <Tab title="two" label="Item Two" />
          <Tab title="three" label="Item Three" />
        </TabList>
        <TabBody>
          <TabPanel>1</TabPanel>
          <TabPanel>2</TabPanel>
          <TabPanel>3</TabPanel>
        </TabBody>
      </Tabs>
      <Typography paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
                facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
                gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
                donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
                adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
                Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
                imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
                arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
                donec massa sapien faucibus et molestie ac.
      </Typography>
    </>
  )
}

export default PageTabs
