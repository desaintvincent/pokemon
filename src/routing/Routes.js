import React from 'react'
import About from '../pages/About'
import Home from '../pages/Home'
import ROUTE from './constants'
import PokemonList from '../pages/PokemonList'
import {
  Route,
  Switch,
  BrowserRouter as Router
} from 'react-router-dom'
import Pokemon from '../pages/Pokemon'
import Login from '../pages/Login'
import PrivateRoute from './PrivateRoute'
import Tabs from '../pages/Tabs'
import Template from '../components/template/Template'

const Routes = () => (
  <Router>
    <Switch>
      <Route path={[ROUTE.LOGIN]}>
        <Template empty>
          <Switch>
            <Route exact path={ROUTE.LOGIN} component={Login}/>
          </Switch>
        </Template>
      </Route>
      <Route>
        <Template>
          <Switch>
            <Route exact path={ROUTE.ABOUT} component={About}/>
            <Route exact path={ROUTE.HOME} component={Home}/>
            <Route exact path={ROUTE.TABS} component={Tabs}/>
            <PrivateRoute exact path={ROUTE.POKEMON} component={Pokemon}/>
            <PrivateRoute exact path={ROUTE.POKEMONLIST} component={PokemonList}/>
          </Switch>
        </Template>
      </Route>
    </Switch>
  </Router>
)

export default Routes
