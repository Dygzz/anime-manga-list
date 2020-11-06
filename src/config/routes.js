import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import Home from '../pages/Home'

const Routes = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Redirect to='/' />
    </Switch>
  )
}

export default Routes
