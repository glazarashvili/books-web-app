import React from 'react'

import Footer from './components/Footer/Footer'
import Navigation from './components/Navigation/Navigation'

import * as views from './pages'
import { appRoutes } from './const/app-routes'
import { Route, Redirect } from 'react-router-dom'

const App = () => {
  const [mode, setMode] = React.useState('light')

  console.log(mode)

  return (
    <div className={mode}>
      <Navigation
        mode={mode}
        onDarkModeClick={() => {
          setMode('dark')
        }}
      />
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
