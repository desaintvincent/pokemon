import React, { useEffect, useState } from 'react'
import { usePokemons } from '../api/pokemon'
import styled from 'styled-components'
import PokemonCard from '../components/pokemon/PokemonCard'
import Pagination from '@material-ui/lab/Pagination'

const Item = styled.li`
  transition: transform .2s;

  &:hover {
    transform: translateX(-2px) translateY(-2px);
  }
`

const usePagination = (itemNumber = 0, itemsPerPage = 20) => {
  const [limit, setItemsPerPage] = useState(itemsPerPage)
  const [count, setItemNumber] = useState(itemNumber)
  const [page, setPage] = useState(1)
  const [pageCount, setPageCount] = useState(count / limit)
  const [offset, setOffset] = useState((page - 1) * limit)

  useEffect(() => {
    setOffset((page - 1) * limit)
  }, [page, limit])

  useEffect(() => {
    setPageCount(Math.ceil(count / limit))
  }, [count, limit])

  const onPageChange = (event, value) => {
    setPage(value)
  }

  return {
    page,
    limit,
    offset,
    pageCount,
    onPageChange,
    setItemNumber,
    setItemsPerPage
  }
}

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const PokemonList = () => {
  const { limit, offset, page, pageCount, onPageChange, setItemNumber } = usePagination()
  const { data, error } = usePokemons({ limit, offset })

  useEffect(() => {
    if (data && data.count) {
      setItemNumber(data.count)
    }
  }, [data, setItemNumber])

  if (error) {
    return <pre>{JSON.stringify(error, null, 2)}</pre>
  }

  return (
    <>
      <List>
        {data ? data.results.map(pokemon => (
          <Item key={pokemon.name}>
            <PokemonCard pokemon={pokemon}/>
          </Item>
        )) : new Array(limit).fill(0).map((_, i) => (
          <Item key={i}>
            <PokemonCard />
          </Item>
        ))}
      </List>

      <Pagination count={pageCount} page={page} showFirstButton showLastButton size="small" onChange={onPageChange}/>
    </>
  )
}

export default PokemonList
