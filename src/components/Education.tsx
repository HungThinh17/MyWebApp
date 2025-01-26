import React from 'react';


const Education = () => {
  return (
    <div className="container-fluid">
      <div className="container">
        <div className="row g-0">
          <div className="col-lg-3">
            <div className="education-header bg-dark h-100 pt-6 pe-6 pb-6">
              <div className="text-start d-flex flex-column justify-content-center wow fadeInUp"
                data-wow-delay="0.1s">
                <p className="text-white sub-title">Education</p>
                <h1 className="display-6 text-white mb-0">My education qualification</h1>
              </div>
            </div>
          </div>
          <div className="col-lg-9">
            <div className="education-content h-100 pt-6 ps-6 pb-6">
              <div className="row g-4">
                <div className="col-12">
                  <div className="education-item rounded p-4 h-100 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="d-flex align-items-center mb-3">
                      <p className="fs-5 mb-0 me-4">Cantho University</p>
                      <div>
                        <span className="fa fa-calendar me-1"></span> 2008 - 2012
                      </div>
                    </div>
                    <h4 className="mb-3">Bachelors - Computer Engineering</h4>
                    <p className="mb-0">Graduated in Sept 2012 with a GPA of 75%.</p>
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

export default Education;
