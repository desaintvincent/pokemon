import React from 'react'
import About from '../pages/About'
import Home from '../pages/Home'
import ROUTE from './constants'
import PokemonList from '../pages/PokemonList'
import {
  Switch,
  Route
} from 'react-router-dom'
import Pokemon from '../pages/Pokemon'

const Routes = () => (
  <Switch>
    <Route path={ROUTE.ABOUT} exact>
      <About />
    </Route>
    <Route path={ROUTE.POKEMON} exact>
      <Pokemon />
    </Route>
    <Route path={ROUTE.POKEMONLIST} exact>
      <PokemonList />
    </Route>
    <Route path={ROUTE.HOME} exact>
      <Home />
    </Route>
  </Switch>
)

export default Routes
