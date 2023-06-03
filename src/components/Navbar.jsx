import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { ReactComponent as Hamburger } from './burger-menu.svg'
import { ReactComponent as Brand } from './logo.svg'
import {useAuth0} from '@auth0/auth0-react';
import './navbar.css'

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [showGamesDropdown, setShowGamesDropdown] = useState(false);
  const {user, loginWithRedirect , isAuthenticated, logout} = useAuth0();
  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }
  const handleShowGamesDropdown = () => {
    setShowGamesDropdown(!showGamesDropdown);
  };
  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <Brand />
          <div className="logo-title">MINDSHIFT</div>
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <Hamburger />
        </div>
        <div className={`nav-elements  ${showNavbar && 'active'}`}>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/calendar">Calendar</NavLink>
            </li>
            <li onMouseEnter={handleShowGamesDropdown} onMouseLeave={handleShowGamesDropdown}>
              <NavLink to="/games">Games</NavLink>
              {showGamesDropdown && (
                <ul className="dropdown-menu">
                  <li>
                    <NavLink to="/games/cards">Cards</NavLink>
                  </li>
                  <li>
                    <NavLink to="/games/assessment">Assessment</NavLink>
                  </li>
                  <li>
                    <NavLink to="/games/puzzle">Puzzle</NavLink>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <NavLink to="/analytics">Analytics</NavLink>
            </li>
            <li>
              <NavLink to="/community">Community</NavLink>
            </li>
            <li>
              <NavLink to="/blog">Blog</NavLink>
            </li>
            {isAuthenticated &&
               ( <p className="emailid"> {user.name} </p>)}
              {
                isAuthenticated ? (
                <button className="loginb"
                onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Log Out
                </button>  
                ) : (  
                <button className="loginb" onClick={()=> loginWithRedirect()}>Log In</button>     
               )}     
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar