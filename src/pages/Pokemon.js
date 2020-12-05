import React from 'react'
import { usePokemon } from '../api/api'
import Loader from '../components/template/Loader'
import { useParams } from 'react-router-dom'

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
    <div>
      <div>name: {pokemon.name}</div>
      <div>weight: {pokemon.weight}</div>
      <div>height: {pokemon.height}</div>
      <div>
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      </div>
    </div>
  )
}

export default Pokemon
