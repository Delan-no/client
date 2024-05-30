import React from 'react'
import { Link } from "react-router-dom";
import Logo from '../images/robot.jpg'
import {FaBars} from 'react-icons/fa'
import {AiOutlineClose} from 'react-icons/ai'


const Header = () => {
  return (
    <nav>
      <div className="container nav__container">
        <Link to="/" className='nav_logo'>
          <img src={Logo} alt="Navbar Logo" />
        </Link>
        <ul>
          <li> <Link to="/profil"> Délanno </Link></li>
          <li> <Link to="/create"> Créer un Post  </Link></li>
          <li> <Link to="/authors"> Auteurs </Link></li>
          <li> <Link to="/logout"> Déconnexion </Link></li>
          {/* <li> <Link to="/profile"> Délanno </Link></li> */}

          <button className="nav_toggle-btn">
              <AiOutlineClose/>
          </button>
        </ul>
      </div>
    </nav>
  )
}

export default Header