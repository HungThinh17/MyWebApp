import React from 'react';
import '../styles/styles.css';
import '../../resources/lib/animate/animate.min.css';
import '../../resources/lib/lightbox/css/lightbox.min.css';
import '../../resources/lib/owlcarousel/assets/owl.carousel.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const About = () => {
  return (
    <div className="container-fluid" id="pigraAbout">
      <div className="container">
        <div className="row g-0">
          <div className="col-12 col-lg-3">
            <div className="about-header bg-dark h-100 pt-6 pe-6 pb-6">
              <div className="text-start d-flex flex-column justify-content-center wow fadeInUp"
                data-wow-delay="0.1s">
                <p className="text-white sub-title">About Me</p>
                <h1 className="display-6 text-white mb-0">Software Engineer based in Vietnam</h1>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-9">
            <div className="about-content h-100 pt-6 ps-6 pb-6">
              <div className="row g-5">
                <div className="col-xl-5">
                  <div className="about-img bg-light p-4 wow fadeInUp" data-wow-delay="0.1s">
                    <img src="img/about.jpg" className="img-fluid w-100" alt="Image" />
                    <div className="sosial-icon">
                      <a className="btn btn-primary btn-sm-square me-3"
                        href="https://github.com/HungThinh17" target="_blank"><i
                          className="fab fa-github text-white"></i></a>
                      <a className="btn btn-primary btn-sm-square me-3"
                        href="https://www.linkedin.com/in/phung-hung-nguyen-4a7428171/"
                        target="_blank"><i className="fab fa-linkedin-in text-white"></i></a>
                      <a className="btn btn-primary btn-sm-square me-0"
                        href="https://www.youtube.com/@hungti17" target="_blank"><i
                          className="fab fa-youtube text-white"></i></a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-7 wow fadeInUp" data-wow-delay="0.3s">
                  <h4 className="mb-4">Hello, I'm Nguyễn Phùng Hưng, Based in Vietnam</h4>
                  <p className="mb-4">Experienced Software Engineer with over 10 years in the industry,
                    skilled in software architecture solutions and development, including testing and
                    maintenance. Proficient in electrical hardware design and analysis, with a strong
                    technical foundation.</p>
                  <div className="row g-4 mb-4">
                    <div className="col-6">
                      <p><strong className="fw-bold text-dark">Phone :</strong> +84 988172302</p>
                      <p><strong className="fw-bold text-dark">Skype :</strong> nguyenphunghung</p>
                      <p className="mb-0"><strong className="fw-bold text-dark">Address :</strong> Danang,
                        Vietnam</p>
                    </div>
                    <div className="col-6">
                      <p><strong className="fw-bold text-dark">Nationality :</strong> Vietnamese</p>
                      <p><strong className="fw-bold text-dark">Email :</strong> nphung75@gmail.com</p>
                      <p className="mb-0"><strong className="fw-bold text-dark">Freelancer :</strong>
                        Available</p>
                    </div>
                  </div>
                  <a href="#" className="btn btn-primary py-2 px-4"> <i
                    className="fas fa-download me-2"></i>Download My CV</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
