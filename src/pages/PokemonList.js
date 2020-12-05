import React from 'react'
import { usePokemons } from '../api/api'
import Loader from '../components/template/Loader'
import styled from 'styled-components'
import PokemonCard from '../components/pokemon/PokemonCard'

const Item = styled.li`
`
const List = styled.ul`
`

const PokemonList = () => {
  const { data, error } = usePokemons()

  if (error) {
    return <pre>{JSON.stringify(error, null, 2)}</pre>
  }

  if (!data) {
    return <Loader />
  }
  return <List>{data.results.map(pokemon => <Item><PokemonCard pokemon={pokemon}/></Item>)}</List>
}

export default PokemonList
