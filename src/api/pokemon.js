import { useApi } from './api'

export const usePokemon = (name) => {
  return useApi(name && `/pokemon/${name}`)
}

export const usePokemons = ({
  offset = 0,
  limit = 20
} = {}) => {
  return useApi(`/pokemon/?offset=${offset}&limit=${limit}`)
}
