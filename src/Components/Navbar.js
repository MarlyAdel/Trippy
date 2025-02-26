import React , {Component} from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
       
 <nav className="navbar navbar-expand-lg navbar-light bg-light p-0">
     <div className='container'>
        <h1 className='logo'>Trippy</h1>
  <button className="navbar-toggler bg-white" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" navbar-toggler>
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item ">
        <a className="nav-link" href="/"><i className="fa-solid fa-house-user"></i>Home </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/about"><i className="fa-solid fa-circle-info"></i>About</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/services"><i className="fa-solid fa-briefcase"></i>Services</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/contact"><i className="fa-solid fa-address-book"></i>Contact</a>
      </li >
      <a className='nav-link' href="/singup"><button>Sing up</button></a>
    </ul>
  </div>
     </div>
</nav>
        
    )
}

export default Navbar