import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importación de Bootstrap

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark-custom">
      <div className="container-fluid">
        <a className="navbar-brand text-white" href="#">Start Bootstrap</a>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto"> {/* Center navbar items */}
            <li className="nav-item">
              <a className="nav-link active nav-link-custom" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-link-custom" href="#">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-link-custom" href="#">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-link-custom" href="#">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
