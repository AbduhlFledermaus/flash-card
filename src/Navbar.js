import React from 'react';

function Navbar() {
  return (
    <div>
      <div className="topnav" id="myTopnav">
        <a href="#home" class="active">
          {' '}
          Home{' '}
        </a>
        <a href="#news">Anmelden</a>
        <a href="#contact">Registrieren</a>
        <a href="#about">Logo</a>
        <a href="javascript:void(0);" class="icon" onclick="myFunction()">
          <i class="fa fa-bars"></i>
        </a>
      </div>
    </div>
  );
}

export default Navbar;
