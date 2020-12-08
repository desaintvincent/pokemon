import React, { useMemo } from 'react'
import styled from 'styled-components'
import ROUTE from '../../routing/constants'
import Link from '../../routing/Link'
import { usePokemon } from '../../api/pokemon'
import { Skeleton as UiSkeleton } from '@material-ui/lab'
import Typography from '@material-ui/core/Typography'
import { Chip } from '@material-ui/core'

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
  transition: background-color .2s;
  min-width: 200px;
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
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Name = styled.div`
  margin: 15px 0 7px;
  letter-spacing: 1px;
  text-transform: capitalize;
`

const Type = styled.small`
  margin: 15px 0 7px;
  letter-spacing: 1px;
`

const Card = ({ type = '', id = '', name = '' }) => (
  <Container type={type || 'normal'}>
    <ImageContainer>
      {
        id ? <Image src={`https://pokeres.bastionbot.org/images/pokemon/${id}.png`} alt={name}/> : <UiSkeleton variant="circle" width={120} height={120} animation="wave"/>
      }
    </ImageContainer>
    <Infos>
      {
        id
          ? <Chip label={`#${id.toString().padStart(3, '0')}`} />
          : <UiSkeleton animation="wave"><Chip label="#000"/></UiSkeleton>
      }
      <Name>
        <Typography variant="h6">{name || <UiSkeleton width={100} animation="wave"/> }</Typography>
      </Name>
      <Type><Typography variant="caption">{type ? `Type: ${type}` : <UiSkeleton width={100} animation="wave"/> }</Typography></Type>
    </Infos>
  </Container>
)

const PokemonCard = ({ pokemon: { name = ''}  = {} }) => {
  const { data, error } = usePokemon(name)
  const type = useMemo(() => data?.types[0]?.type?.name || '', [data])

  if (error) {
    return null
  }

  const id = data ? data.id : ''
  const cardName = data ? data.name : ''

  return (
    <>
      <Link to={ROUTE.POKEMON} name={name}>
        <Card type={type} id={id} name={cardName} />
      </Link>
    </>
  )
}

export default PokemonCard
