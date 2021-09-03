import React from 'react'

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

import * as views from './pages'
import { appRoutes } from './const/app-routes'
import { Route, Redirect } from 'react-router-dom'

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <Route path='/' exact>
        <Redirect to='landing' />
      </Route>
      <Route path='*'>
        <Redirect to='/landing' />
      </Route>
      {appRoutes.map(route => {
        const Component = views[route.component]
        return (
          <Route
            exact={route.exact}
            key={route.component}
            component={Component}
            path={`/${route.path}`}
          />
        )
      })}
      <Footer />
    </React.Fragment>
  )
}

export default App
