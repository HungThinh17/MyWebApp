import React from 'react';


const Navbar = () => {
  return (
    <div className="container-fluid nav-section border-0">
      <nav className="navbar navbar-light">
        <div className="navbar-nav flex-column">
          <a href="#pigraHome" className="nav-item nav-link active"><span className="fa fa-home"></span> Home</a>
          <a href="#pigraAbout" className="nav-item nav-link"><span className="far fa-address-card"></span> About</a>
          <a href="#pigraService" className="nav-item nav-link"><span className="fab fa-servicestack"></span> Service</a>
          <a href="#pigraBlog" className="nav-item nav-link"><span className="fa fa-blog"></span> Blog</a>
          <a href="#pigraContact" className="nav-item nav-link"><span className="fas fa-address-book"></span> Contact</a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
