import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import Home from '../pages/Home'
import Anime from '../pages/Anime'
import Manga from '../pages/Manga'
import Favorite from '../pages/Favorite'

const Routes = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/anime/:id' component={Anime} />
      <Route exact path='/manga/:id' component={Manga} />
      <Route exact path='/favorite' component={Favorite} />
      <Redirect to='/' />
    </Switch>
  )
}

export default Routes
