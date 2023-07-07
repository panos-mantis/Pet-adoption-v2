import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">Test</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link  className="nav-link" to="/">Home <span className="sr-only"></span></Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/pets">Pets</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Adopt">Adopt</Link>
          </li>
          <li className="nav-item dropdown">
            <Link className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Species
            </Link>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <li><Link className="dropdown-item" to="Species/cat">Cats</Link></li>
              <li><Link className="dropdown-item" to="Species/dog">Dogs</Link></li>
              <li><Link className="dropdown-item" to="Species/kitten">Kittens</Link></li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="ml-auto">
        <a className="btn btn-primary" href="/login">Login</a>
      </div>
    </nav>
  );
};

export default Navbar;
