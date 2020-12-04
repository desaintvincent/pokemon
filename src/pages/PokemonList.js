import React from 'react'
import {usePokemons} from "../api/api";
import Loader from "../components/Loader";
import ROUTE from "../routing/constants";
import Link from "../routing/Link";


const PokemonItem = ({pokemon}) => {
    return <li>
        <Link to={ROUTE.POKEMON} name={pokemon.name}>
            {pokemon.name}
        </Link>
    </li>
}

const PokemonList = () => {
    const { data, error } = usePokemons()

    if (error) {
        return <pre>{JSON.stringify(error, null, 2)}</pre>;
    }

    if (!data) {
        return <Loader />;
    }
    return <ul>{data.results.map(pokemon => <PokemonItem pokemon={pokemon} />)}</ul>
}

export default PokemonList
