import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import { queryCache } from 'store'
import { HomePage } from 'pages/HomePage'
import { Routes } from 'global/routes'
import { ReactQueryCacheProvider } from 'react-query'

const App = () => (
  <Router>
    <ReactQueryCacheProvider queryCache={queryCache}>
      <Switch>
        <Route
          exact
          path={Routes.HOME_PAGE}
          component={HomePage}
        />
      </Switch>
    </ReactQueryCacheProvider>
  </Router>
)

export default App
