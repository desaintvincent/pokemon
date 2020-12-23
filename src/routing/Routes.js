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
import Login from '../pages/Login'
import PrivateRoute from './PrivateRoute'
import Tabs from '../pages/Tabs'

const Routes = () => (
  <Switch>
    <Route path={ROUTE.ABOUT} exact>
      <About />
    </Route>
    <Route path={ROUTE.LOGIN} exact>
      <Login />
    </Route>
    <Route path={ROUTE.TABS} exact>
      <Tabs />
    </Route>
    <PrivateRoute path={ROUTE.POKEMON} exact>
      <Pokemon />
    </PrivateRoute>
    <PrivateRoute path={ROUTE.POKEMONLIST} exact>
      <PokemonList />
    </PrivateRoute>
    <PrivateRoute path={ROUTE.HOME} exact>
      <Home />
    </PrivateRoute>
  </Switch>
)

export default Routes
