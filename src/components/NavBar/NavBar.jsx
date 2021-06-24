import React from 'react';
import { NavLink } from 'react-router-dom';
import StyleHeader from './styles';

export default function NavBar() {
  return (
    <StyleHeader>
      <nav className="NavBar">
        <div className="LogoContainer">
          <a href="http://localhost:3000/">
            <img src="/img/me.jpg" alt="logo" className="LogoImg" />
          </a>
        </div>
        <div className="Links">
          <ul>
            <li className="Home">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="Creations">
              <NavLink to="/creations">Créations</NavLink>
            </li>
            <li className="Career">
              <NavLink to="/career">Parcours</NavLink>
            </li>
            <li className="Contact">
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </StyleHeader>
  );
}
