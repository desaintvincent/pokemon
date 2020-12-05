import React from 'react'
import styled from 'styled-components'
import ROUTE from '../../routing/constants'
import Link from '../../routing/Link'
import { usePokemon } from '../../api/api'
import Loader from '../template/Loader'

const Container = styled.div`
  background-color: #eee;
  border-radius: 20px;
  box-shadow: 0 3px 15px rgba(100, 100, 100, 0.5);
  margin: 10px;
  padding: 20px;
  text-align: center;
`

const Card = () => (
  <Container>
        aa
  </Container>
)

const PokemonCard = ({ pokemon: { name } }) => {
  const { data, error } = usePokemon(name)

  if (error) {
    throw error
  }

  if (!data) {
    return <Loader />
  }

  return (
    <Link to={ROUTE.POKEMON} name={name}>
      <Card />
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </Link>
  )
}

export default PokemonCard
