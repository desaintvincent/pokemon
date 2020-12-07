import React from 'react'
import { usePokemon } from '../api/pokemon'
import Loader from '../components/template/Loader'
import { useParams } from 'react-router-dom'
import { Breadcrumbs } from '@material-ui/core'
import Link from '../routing/Link'
import ROUTE from '../routing/constants'
import Typography from '@material-ui/core/Typography'

const Pokemon = () => {
  const { name = 'pikachu' } = useParams()
  const { data: pokemon, error } = usePokemon(name)

  if (error) {
    console.log('error', error)
    return (
      <div>
                does not exist
        <pre>{JSON.stringify(error, null, 2)}</pre>
      </div>
    )
  }

  if (!pokemon) {
    return <Loader />
  }

  return (
    <>
      <Breadcrumbs aria-label="breadcrumb">
        <Link to={ROUTE.HOME}>
                Home
        </Link>
        <Link to={ROUTE.POKEMONLIST}>
                Pokemon list
        </Link>
        <Typography color="textPrimary">{pokemon.name}</Typography>
      </Breadcrumbs>

      <Typography variant="h4"> {pokemon.name}</Typography>
      <div>weight: {pokemon.weight}</div>
      <div>height: {pokemon.height}</div>
      <div>
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      </div>
    </>
  )
}

export default Pokemon
