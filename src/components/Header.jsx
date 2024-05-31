import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Logo from '../images/robot.jpg';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img src={Logo} alt="Navbar Logo" className="h-8 w-8 lg:h-12 lg:w-12 rounded-full"/>
        </Link>
        <div className="hidden md:flex space-x-4">
          <Link to="/profil" className="text-lg font-bold underline">Délanno</Link>
          <Link to="/create" className="text-lg">Créer un Post</Link>
          <Link to="/authors" className="text-lg">Auteurs</Link>
          <Link to="/logout" className="text-lg">Déconnexion</Link>
        </div>
        <button className="md:hidden text-2xl" onClick={toggleMenu}>
          {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden bg-gray-200 w-full border-t border-gray-200">
          <ul className="flex flex-col items-center space-y-4 p-4">
            <li><Link to="/profil" className="lg:text-lg font-bold underline" onClick={toggleMenu}>Délanno</Link></li>
            <li><Link to="/create" className="lg:text-lg" onClick={toggleMenu}>Créer un Post</Link></li>
            <li><Link to="/authors" className="lg:text-lg" onClick={toggleMenu}>Auteurs</Link></li>
            <li><Link to="/logout" className="lg:text-lg" onClick={toggleMenu}>Déconnexion</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Header;
