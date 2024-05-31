import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-700 text-white py-6 mt-16">
      <div className="container mx-auto px-1">
        <ul className="flex flex-wrap justify-center gap-5 mb-4">
          <li><Link to="/posts/categories/Agriculture" className="bg-gray-900 hover:bg-white hover:text-gray-900  text-white p-2 px-3 rounded-lg mb-20">Agriculture</Link></li>
          <li><Link to="/posts/categories/Business" className="bg-gray-900 hover:bg-white hover:text-gray-900  text-white p-2 px-3 rounded-lg mb-20">Business</Link></li>
          <li><Link to="/posts/categories/Education" className="bg-gray-900 hover:bg-white hover:text-gray-900  text-white p-2 px-3 rounded-lg mb-20">Education</Link></li>
          <li><Link to="/posts/categories/Entertainment" className="bg-gray-900 hover:bg-white hover:text-gray-900  text-white p-2 px-3 rounded-lg mb-20">Entertainment</Link></li>
          <li><Link to="/posts/categories/Art" className="bg-gray-900 hover:bg-white hover:text-gray-900  text-white p-2 px-3 rounded-lg mb-20">Art</Link></li>
          <li><Link to="/posts/categories/Investment" className="bg-gray-900 hover:bg-white hover:text-gray-900  text-white p-2 px-3 rounded-lg mb-20">Investment</Link></li>
          <li><Link to="/posts/categories/Uncategorizez" className="bg-gray-900 hover:bg-white hover:text-gray-900  text-white p-2 px-3 rounded-lg mb-20">Uncategorizez</Link></li>
          <li><Link to="/posts/categories/Weather" className="bg-gray-900 hover:bg-white hover:text-gray-900  text-white p-2 px-3 rounded-lg mb-20">Weather</Link></li>
        </ul>
        <div className="text-center border-t border-gray-700 pt-4">
          <small>Tous droits réservés &copy; Copyright, <span className="text-amber-600 text-lg">Délanno</span></small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
