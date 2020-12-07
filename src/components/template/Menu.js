import React from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import InfoIcon from '@material-ui/icons/Info'
import ListIcon from '@material-ui/icons/List'
import HomeIcon from '@material-ui/icons/Home'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'
import Link from '../../routing/Link'
import styled from 'styled-components'
import ROUTE from '../../routing/constants'
import { useMe } from '../../api/user'

const IconContainer = styled(ListItemIcon)`
  min-width: 40px;
  width: 40px;
  display: flex;
  justify-content: center;
`

const TextContainer = styled(ListItemText)`
  margin-left: 16px;
`

const Item = ({ text, icon, to }) => {
  return (
    <Link to={to}>
      <ListItem button key={text}>
        <IconContainer>{icon}</IconContainer>
        <TextContainer primary={text} />
      </ListItem>
    </Link>
  )
}

const Menu = () => {
  const { loggedOut } = useMe()
  return (
    <>
      <List>
        <Item icon={<HomeIcon />} text='Home' to={ROUTE.HOME} />
        <Item icon={<InfoIcon />} text='About' to={ROUTE.ABOUT} />
      </List>
      {
        !loggedOut && <>
          <Divider />
          <List>
            <Item icon={<ListIcon />} text='Pokemon list' to={ROUTE.POKEMONLIST} />
          </List>
        </>
      }
    </>
  )
}

export default Menu
