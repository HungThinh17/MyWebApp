import React from 'react';


const Header = () => {
  return (
    <div className="container-fluid" id="pigraHome">
      <div className="container">
        <div className="row g-0">
          <div className="col-12 col-lg-3">
            <div className="header-content bg-dark h-100 pt-6 pe-6 pb-6">
              <a href="index.html" className="navbar-brand d-inline-flex pb-5 wow fadeInUp" data-wow-delay="0.1s">
                <h1 className="display-6 text-white mb-0">Hưng Nguyễn</h1>
              </a>
              <div className="text-start d-flex flex-column justify-content-center wow fadeInUp"
                data-wow-delay="0.3s">
                <p className="text-white sub-title">👋 Hello I'm Hưng</p>
                <h1 className="display-6 text-white mb-0">Software Engineer with 10+ Years Experience</h1>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-9">
            <div className="header-img d-flex h-100 pt-6 ps-6 pb-6">
              <div className="row g-5">
                <div className="col-xl-6 wow fadeInUp" data-wow-delay="0.1s">
                  <div className="bg-light p-4" style={{ borderRadius: '68% 32% 100% 0% / 0% 75% 25% 100%' }}>
                    <img src="img/header-img.jpg" className="img-fluid w-100"
                      style={{ borderRadius: '68% 32% 100% 0% / 0% 75% 25% 100%' }} alt="Image" />
                  </div>
                </div>
                <div className="col-xl-6 wow fadeInUp" data-wow-delay="0.3s">
                  <h1 className="display-6 mb-4">Experienced Software Engineer</h1>
                  <p className="mb-4">Experienced Software Engineer with over 10 years in the industry,
                    skilled in software architecture solutions and development, including testing and
                    maintenance. Proficient in electrical hardware design and analysis, with a strong
                    technical foundation.</p>
                  <div className="d-flex align-items-center mb-2">
                    <i className="fas fa-map-marker-alt text-primary me-3"></i>
                    <p className="text-dark mb-0">Danang, Vietnam</p>
                  </div>
                  <div className="d-flex align-items-center mb-2">
                    <i className="fas fa-envelope text-primary me-3"></i>
                    <p className="text-dark mb-0">nphung75@gmail.com</p>
                  </div>
                  <div className="d-flex align-items-center mb-2">
                    <i className="fa fa-phone-alt text-primary me-3"></i>
                    <p className="text-dark mb-0">(+84) 988172302</p>
                  </div>
                  <div className="d-flex align-items-center mb-4">
                    <i className="fab fa-firefox-browser text-primary me-3"></i>
                    <p className="text-dark mb-0">mylifemygamemyway.com</p>
                  </div>
                  <div className="d-flex">
                    <a className="btn btn-primary btn-sm-square me-3" href="https://github.com/HungThinh17"
                      target="_blank"><i className="fab fa-github text-white"></i></a>
                    <a className="btn btn-primary btn-sm-square me-3"
                      href="https://www.linkedin.com/in/phung-hung-nguyen-4a7428171/"
                      target="_blank"><i className="fab fa-linkedin-in text-white"></i></a>
                    <a className="btn btn-primary btn-sm-square me-0"
                      href="https://www.youtube.com/@hungti17" target="_blank"><i
                        className="fab fa-youtube text-white"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
