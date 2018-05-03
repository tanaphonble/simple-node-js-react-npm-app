import React, { Component } from 'react'
import HistoryRouter from './HistoryRouter'
import { Route, Switch, Redirect } from 'react-router-dom'
import App from './App'

class Routes extends Component {
  render() {
    return <HistoryRouter>
      <Switch>
        <Route exact path='/' component={App} />
      </Switch>
    </HistoryRouter>
  }
}

export default Routes 