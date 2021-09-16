import React from 'react'

import './App.css'

import Footer from './components/Footer/Footer'
import Navigation from './components/Navigation/Navigation'

import * as views from './pages'
import { useSelector } from 'react-redux'
import { appRoutes } from './const/app-routes'
import { Route, Redirect } from 'react-router-dom'

const App = () => {
  const darkmode = useSelector(store => store.darkmode.toggle)

  return (
    <div className={darkmode ? 'dark' : 'light'}>
      <Navigation />
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
      <Route path='/' exact>
        <Redirect to='landing' />
      </Route>
      <Footer />
    </div>
  )
}

export default App
