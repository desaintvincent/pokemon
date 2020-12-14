import React from 'react'
import Routes from './routing/Routes'
import Providers from './providers/Providers'

export default function App () {
  return (
    <Providers>
      <Routes />
    </Providers>
  )
}
