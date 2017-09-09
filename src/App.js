import React from 'react'
import { ConnectedRouter } from 'react-router-redux'
import { Route, Redirect } from 'react-router-dom'
import { history } from './redux/store'
import { connect } from 'react-redux'

import Header from './views/Header'
import Home from './views/Home'
import SignUp from './views/SignUp'
import Login from './views/LogIn'
import Favorites from './views/Favorites'

const PrivateRoute = ({ component: Component, authenticated, ...props }) =>
  <Route {...props} render={ props => authenticated === true
    ? <Component {...props} />
    : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
  } />

const PublicRoute = ({ component: Component, authenticated, ...props }) =>
  <Route {...props} render={props => authenticated === false
    ? <Component {...props} />
    : <Redirect to="/favorites" />
  } />

const App = ({ authenticated }) =>
  <ConnectedRouter history={history}>
    <div>
      <Header />
      <div className="container">
        <Route exact path="/" component={Home} />
        <PublicRoute authenticated={authenticated} path="/signup" component={SignUp} />
        <PublicRoute authenticated={authenticated} path="/login" component={Login} />
        <PrivateRoute authenticated={authenticated} path="/favorites" component={Favorites} />
      </div>
    </div>
  </ConnectedRouter>

const mapStateToProps = state => ({
  authenticated: state.auth.authenticated
})
export default connect(mapStateToProps)(App)
