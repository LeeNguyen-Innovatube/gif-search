import React from 'react'
import { ConnectedRouter } from 'react-router-redux'
import { Route, Redirect } from 'react-router-dom'
import { history } from './../store/configureStore'
import { connect } from 'react-redux'

import Header from './../containers/Header'
import Home from './../containers/Home'
import SignUp from './../containers/SignUp'
import Login from './../containers/LogIn'
import Favorites from './../containers/Favorites'

const PrivateRoute = ({ component: Component, authenticated, ...props }) => (
  <Route {...props} render={ props => authenticated === true
    ? <Component {...props} />
    : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
  } />
)

const PublicRoute = ({ component: Component, authenticated, ...props }) => (
  <Route {...props} render={props => authenticated === false
    ? <Component {...props} />
    : <Redirect to="/favorites" />
  } />
)

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