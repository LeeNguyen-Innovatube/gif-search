import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import * as AuthActions from '../redux/auth/actions'

const Header = ({ signOutUser, authenticated }) => {
  const handleSignOut = () => signOutUser()

  const renderAuthLinks = () => {
    if (authenticated) {
      return [
        <li className="nav-item" key={1}>
          <Link className="nav-link" to="/favorites">My Favorites</Link>
        </li>,
        <li className="nav-item" key={2}>
          <a className="nav-link" href='' onClick={handleSignOut}>Sign Out</a>
        </li>
      ]
    } else {
      return [
        <li className="nav-item" key={1}>
          <Link className="nav-link" to="/login">Login</Link>
        </li>,
        <li className="nav-item" key={2}>
          <Link className="nav-link" to="/signup">Sign Up</Link>
        </li>
      ]
    }
  }
  return (
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <Link to="/" className="navbar-brand">React2Gifs</Link>
        </div>
        <ul className="nav navbar-nav navbar-right">
          {renderAuthLinks()}
        </ul>
      </div>
    </nav>
  )
}
const mapStateToProps = (state) => ({
  authenticated: state.auth.authenticated
})

export default connect(mapStateToProps, AuthActions)(Header)
