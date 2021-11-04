import React, {useContext} from 'react';
import { DarkLightContext } from 'context/DarkLightContext';
import {Link} from 'react-router-dom';
import BtnToggleTheme from 'components/BtnToggleTheme';

const Navbar = () => {
  
  const {darkLight} = useContext(DarkLightContext)

  return (
    <nav className={`navbar navbar-expand-lg  ${darkLight? 'navbar-light bg-light' : "navbar-dark bg-dark"}`}>
      <div className="container-fluid">
        <Link to="" className="navbar-brand">Agence Website</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="" className="nav-link active">Home</Link>
            </li>
            <li className="nav-item">
             <Link to="/works" className="nav-link active">Works</Link>
            </li>
            <li className="nav-item">
             <Link to="/about" className="nav-link active">About</Link>
            </li>
          </ul>
          <BtnToggleTheme />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;