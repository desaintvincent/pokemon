import React, {useMemo} from 'react'
import { Link as RouterLink } from "react-router-dom"

const Link = ({to, children, ...props}) => {
    console.log(props)
    const url = useMemo(() => Object.entries(props).reduce((accumulator, [currentKey, currentValue]) => {
        return accumulator.replace(`/:${currentKey}`, `/${currentValue}`)
    }, to), [props, to]);
    return <RouterLink to={url}>{children}</RouterLink>
}

export default Link
