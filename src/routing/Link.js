import React, { useMemo } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import styled from 'styled-components'

const StyledLink = styled(RouterLink)`
  text-decoration: none;
  color: inherit;
`

const Link = ({ to, children, ...props }) => {
  const url = useMemo(() => Object.entries(props).reduce((accumulator, [currentKey, currentValue]) => {
    return accumulator.replace(`/:${currentKey}`, `/${currentValue}`)
  }, to), [props, to])
  return <StyledLink to={url}>{children}</StyledLink>
}

export default Link
