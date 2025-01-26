import React from 'react';


const Service = () => {
  return (
    <div className="container-fluid" id="pigraService">
      <div className="container">
        <div className="row g-0">
          <div className="col-lg-3">
            <div className="service-header h-100 bg-dark pt-6 pe-6 pb-6">
              <div className="text-start d-flex flex-column justify-content-center wow fadeInUp"
                data-wow-delay="0.1s">
                <p className="text-white sub-title">My Services</p>
                <h1 className="display-6 text-white mb-0">What I do for you</h1>
              </div>
            </div>
          </div>
          <div className="col-lg-9">
            <div className="service-content h-100 pt-6 ps-6 pb-6">
              <div className="row g-4">
                <div className="col-12">
                  <div className="service-item p-4 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="row g-4 align-items-center">
                      <div className="col-xl-2">
                        <i className="fas fa-bezier-curve fa-3x"></i>
                      </div>
                      <div className="col-xl-3">
                        <a href="#" className="h4 mb-0">Software Development</a>
                      </div>
                      <div className="col-xl-4">
                        <p className="mb-0">Developing and maintaining software applications using
                          various programming languages and frameworks.</p>
                      </div>
                      <div className="col-xl-3">
                        <p><i className="fa fa-check me-2"></i> Requirement Analysis</p>
                        <p><i className="fa fa-check me-2"></i> Design Patterns</p>
                        <p className="mb-0"><i className="fa fa-check me-2"></i> Test-Driven Development</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="service-item p-4 wow fadeInUp" data-wow-delay="0.3s">
                    <div className="row g-4 align-items-center">
                      <div className="col-xl-2">
                        <i className="fas fa-laptop-code fa-3x"></i>
                      </div>
                      <div className="col-xl-3">
                        <a href="#" className="h4 mb-0">Embedded Systems</a>
                      </div>
                      <div className="col-xl-4">
                        <p className="mb-0">Designing and developing embedded systems for various
                          applications including IoT and automotive infotainment.</p>
                      </div>
                      <div className="col-xl-3">
                        <p><i className="fa fa-check me-2"></i> Hardware Analysis</p>
                        <p><i className="fa fa-check me-2"></i> Microcontroller Programming</p>
                        <p className="mb-0"><i className="fa fa-check me-2"></i> Real-time Systems</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="service-item p-4 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="row g-4 align-items-center">
                      <div className="col-xl-2">
                        <i className="fab fa-app-store fa-3x"></i>
                      </div>
                      <div className="col-xl-3">
                        <a href="#" className="h4 mb-0">Android Development</a>
                      </div>
                      <div className="col-xl-4">
                        <p className="mb-0">Developing Android applications using the Android SDK and
                          other related technologies.</p>
                      </div>
                      <div className="col-xl-3">
                        <p><i className="fa fa-check me-2"></i> Android Audio Framework</p>
                        <p><i className="fa fa-check me-2"></i> Middleware Components</p>
                        <p className="mb-0"><i className="fa fa-check me-2"></i> Android HAL</p>
                      </div>
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

export default Service;
