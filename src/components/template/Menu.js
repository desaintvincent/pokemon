import React from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import InfoIcon from '@material-ui/icons/Info'
import ListIcon from '@material-ui/icons/List'
import HomeIcon from '@material-ui/icons/Home'
import TabIcon from '@material-ui/icons/Tab'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'
import Link from '../../routing/Link'
import styled from 'styled-components'
import ROUTE from '../../routing/constants'
import { useAuth } from '../../providers/AuthProvider'

const IconContainer = styled(ListItemIcon)`
  width: ${props => props.theme.drawer.closed - 16 * 2}px;
  min-width: ${props => props.theme.drawer.closed - 16 * 2}px;
  display: flex;
  justify-content: center;
  color: ${props => props.theme.white};
`

const TextContainer = styled(ListItemText)`
  margin-left: 16px;
  color: ${props => props.theme.white};
`

const Item = ({ text, Icon, to }) => {
  return (
    <Link to={to}>
      <ListItem button key={text}>
        <IconContainer><Icon /></IconContainer>
        <TextContainer primary={text} />
      </ListItem>
    </Link>
  )
}

const Menu = () => {
  const { logged } = useAuth()
  return (
    <>
      <List>
        <Item Icon={HomeIcon} text='Home' to={ROUTE.HOME} />
        <Item Icon={InfoIcon} text='About' to={ROUTE.ABOUT} />
      </List>
      {
        logged && <>
          <Divider />
          <List>
            <Item Icon={TabIcon} text='Tabs' to={ROUTE.TABS} />
            <Item Icon={ListIcon} text='Pokemon list' to={ROUTE.POKEMONLIST} />
          </List>
        </>
      }
    </>
  )
}

export default Menu
