import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import { queryClient } from 'store/state'
import { HomePage } from 'pages/HomePage'
import { Routes } from 'global/routes'
import { QueryClientProvider } from 'react-query'

const App = () => (
  <Router>
    <QueryClientProvider client={queryClient}>
      <Switch>
        <Route
          exact
          path={Routes.HOME_PAGE}
          component={HomePage}
        />
      </Switch>
    </QueryClientProvider>
  </Router>
)

export default App
