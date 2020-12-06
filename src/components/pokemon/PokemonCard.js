import React from 'react'
import styled from 'styled-components'
import ROUTE from '../../routing/constants'
import Link from '../../routing/Link'
import { usePokemon } from '../../api/api'
import Loader from '../template/Loader'

const colors = {
  fire: '#FDDFDF',
  grass: '#DEFDE0',
  electric: '#FCF7DE',
  water: '#DEF3FD',
  ground: '#f4e7da',
  rock: '#d5d5d4',
  fairy: '#fceaff',
  poison: '#98d7a5',
  bug: '#f8d5a3',
  dragon: '#97b3e6',
  psychic: '#eaeda1',
  flying: '#F5F5F5',
  fighting: '#E6E0D4',
  normal: '#F5F5F5'
}

const Container = styled.div`
  background-color: ${(props) => colors[props.type]};
  border-radius: 20px;
  box-shadow: 0 3px 15px rgba(100, 100, 100, 0.5);
  margin: 10px;
  padding: 20px;
  text-align: center;
  align-items: center;
  display: flex;
  flex-direction: column;
`

const ImageContainer = styled.div`
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 50%;
  width: 120px;
  height: 120px;
  text-align: center;
`

const Image = styled.img`
  margin-top: 20px;
  max-width: 90%;
  width: 120px;
`

const Infos = styled.div`
  margin-top: 20px;
`

const Id = styled.span`
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  font-size: 0.8em;
  padding: 5px 10px;
`

const Name = styled.h3`
  margin: 15px 0 7px;
  letter-spacing: 1px;
  text-transform: capitalize;
`

const Type = styled.small`
  margin: 15px 0 7px;
  letter-spacing: 1px;
`

const Card = ({ types, id, name }) => (
  <Container type={types[0]}>
    <ImageContainer>
      <Image src={`https://pokeres.bastionbot.org/images/pokemon/${id}.png`} alt={name}/>
    </ImageContainer>
    <Infos>
      <Id>#{id.toString().padStart(3, '0')}</Id>
      <Name>{name}</Name>
      <Type>Type: <span>{types[0]}</span></Type>
    </Infos>
  </Container>
)

const PokemonCard = ({ pokemon: { name, type } }) => {
  const { data, error } = usePokemon(name)

  if (error) {
    throw error
  }

  if (!data) {
    return <Loader />
  }

  const pokemon = {
    types: data.types.map(type => type.type.name),
    id: data.id
  }

  return (
    <Link to={ROUTE.POKEMON} name={name}>
      <Card types={pokemon.types} id={data.id} name={data.name} />
    </Link>
  )
}

export default PokemonCard
