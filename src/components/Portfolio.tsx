import React from 'react';


const Portfolio = () => {
  return (
    <div className="container-fluid">
      <div className="container">
        <div className="row g-0">
          <div className="col-lg-3">
            <div className="portfolio-header h-100 bg-dark pt-6 pe-6 pb-6">
              <div className="text-start d-flex flex-column justify-content-center wow fadeInUp"
                data-wow-delay="0.1s">
                <p className="text-white sub-title">Portfolio</p>
                <h1 className="display-6 text-white mb-0">My Recent Works</h1>
              </div>
            </div>
          </div>
          <div className="col-lg-9">
            <div className="portfolio-content h-100 pt-6 ps-6 pb-6">
              <div className="portfolio-item py-5 border-bottom wow fadeInUp" data-wow-delay="0.1s">
                <div className="row g-4 align-items-center">
                  <div className="col-xl-6">
                    <h4 className="text-body">Software Development</h4>
                    <h1 className="display-6 mb-0">SaaS Product for User Data Management</h1>
                  </div>
                  <div className="col-9 col-xl-4">
                    <div className="portfolio-img">
                      <div className="portfolio-img-inner">
                        <img src="img/Portfolio-1.jpg" className="img-fluid" alt="Image" />
                      </div>
                    </div>
                  </div>
                  <div className="col-3 col-xl-2">
                    <div className="view-img">
                      <a href="img/Portfolio-1.jpg" className="btn btn-primary btn-lg-square"
                        data-lightbox="Portfolio-1"><i className="fas fa-plus"></i></a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="portfolio-item py-5 border-bottom wow fadeInUp" data-wow-delay="0.3s">
                <div className="row g-4 align-items-center">
                  <div className="col-xl-6">
                    <h4 className="text-body">Embedded Systems</h4>
                    <h1 className="display-6 mb-0">Barcode Scanner Product Development</h1>
                  </div>
                  <div className="col-9 col-xl-4">
                    <div className="portfolio-img">
                      <div className="portfolio-img-inner">
                        <img src="img/portfolio-2.jpg" className="img-fluid" alt="Image" />
                      </div>
                    </div>
                  </div>
                  <div className="col-3 col-xl-2">
                    <div className="view-img">
                      <a href="img/portfolio-2.jpg" className="btn btn-primary btn-lg-square"
                        data-lightbox="portfolio-2"><i className="fas fa-plus"></i></a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="portfolio-item py-5 wow fadeInUp" data-wow-delay="0.5s">
                <div className="row g-4 align-items-center">
                  <div className="col-xl-6">
                    <h4 className="text-body">Android Development</h4>
                    <h1 className="display-6 mb-0">Automotive Infotainment System</h1>
                  </div>
                  <div className="col-9 col-xl-4">
                    <div className="portfolio-img">
                      <div className="portfolio-img-inner">
                        <img src="img/portfolio-3.jpg" className="img-fluid" alt="Image" />
                      </div>
                    </div>
                  </div>
                  <div className="col-3 col-xl-2">
                    <div className="view-img">
                      <a href="img/portfolio-3.jpg" className="btn btn-primary btn-lg-square"
                        data-lightbox="portfolio-3"><i className="fas fa-plus"></i></a>
                    </div>
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

export default Portfolio;
