import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

import { Route, BrowserRouter as Router, Redirect } from 'react-router-dom'
import { appRoutes } from './const/app-routes'
import * as views from './pages'

const App = () => {
  return (
    <Router>
      <Header />
      <Route path='/' exact>
        <Redirect to='landing' />
      </Route>
      {/* <Route path='/landing'>
        <Landing />
      </Route>
      <Route path='/login'>
        <Login />
      </Route>
      <Route path='/register'>
        <Register />
      </Route> */}
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
    </Router>
  )
}

export default App
