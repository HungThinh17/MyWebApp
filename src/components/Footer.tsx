import React from 'react';


const Footer = () => {
  return (
    <div className="container-fluid footer bg-dark border-bottom-0">
      <div className="container wow fadeIn" data-wow-delay="0.1s">
        <div className="row g-0">
          <div className="col-12">
            <div className="footer-content h-100 pt-6 ps-6 pb-6">
              <div className="row g-4 align-items-center">
                <div className="col-12 text-center">
                  <div className="d-flex justify-content-center">
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
                <div className="col-12 text-center">
                  <span className="text-body"><a href="#" className="border-bottom text-white"><i
                    className="fas fa-copyright text-body me-2"></i>Nguyễn Phùng Hưng</a>, All right
                    reserved.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
