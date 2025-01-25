import React from 'react';
import '../styles/styles.css';
import '../../resources/lib/animate/animate.min.css';
import '../../resources/lib/lightbox/css/lightbox.min.css';
import '../../resources/lib/owlcarousel/assets/owl.carousel.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Blog = () => {
  return (
    <div className="container-fluid" id="pigraBlog">
      <div className="container">
        <div className="row g-0">
          <div className="col-lg-3">
            <div className="blog-header h-100 bg-dark pt-6 pe-6 pb-6">
              <div className="text-start d-flex flex-column justify-content-center wow fadeInUp"
                data-wow-delay="0.1s">
                <p className="text-white sub-title">Blog</p>
                <h1 className="display-6 text-white mb-0">Recent Posts</h1>
              </div>
            </div>
          </div>
          <div className="col-lg-9">
            <div className="blog-content h-100 pt-6 ps-6 pb-6">
              <div className="row g-4">
                <div className="col-xl-6">
                  <div className="blog-item wow fadeInUp" data-wow-delay="0.1s">
                    <div className="row g-4">
                      <div className="col-4">
                        <div className="blog-item-img bg-dark h-100">
                          <a href="#">
                            <img src="img/blog-1.jpg" className="img-fluid w-100 h-100"
                              style={{ objectFit: 'cover' }} alt="Image" />
                          </a>
                        </div>
                      </div>
                      <div className="col-8">
                        <div className="h-100">
                          <p className="text-body mb-3"><i className="fa fa-calendar-alt me-2"></i>
                            January 12, 2025</p>
                          <a href="#" className="d-inline-block h4 mb-4">Secrets of the Mobile
                            Application</a>
                          <div className="py-2 px-3 bg-light d-flex justify-content-between">
                            <p className="mb-0 text-body">By <a href="#" className="h6">Nguyễn Phùng
                              Hưng</a></p>
                            <p className="mb-0 text-body">In <a href="#" className="h6">Technology</a>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6">
                  <div className="blog-item wow fadeInUp" data-wow-delay="0.3s">
                    <div className="row g-4">
                      <div className="col-4">
                        <div className="blog-item-img bg-dark h-100">
                          <a href="#">
                            <img src="img/blog-2.jpg" className="img-fluid w-100 h-100"
                              style={{ objectFit: 'cover' }} alt="Image" />
                          </a>
                        </div>
                      </div>
                      <div className="col-8">
                        <div className="h-100">
                          <p className="text-body mb-3"><i className="fa fa-calendar-alt me-2"></i>
                            January 18, 2025</p>
                          <a href="#" className="d-inline-block h4 mb-4">How to Create Quality Figma
                            Design</a>
                          <div className="py-2 px-3 bg-light d-flex justify-content-between">
                            <p className="mb-0 text-body">By <a href="#" className="h6">Nguyễn Phùng
                              Hưng</a></p>
                            <p className="mb-0 text-body">In <a href="#" className="h6">Design</a></p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6">
                  <div className="blog-item wow fadeInUp" data-wow-delay="0.5s">
                    <div className="row g-4">
                      <div className="col-4">
                        <div className="blog-item-img bg-dark h-100">
                          <a href="#">
                            <img src="img/blog-3.jpg" className="img-fluid w-100 h-100"
                              style={{ objectFit: 'cover' }} alt="Image" />
                          </a>
                        </div>
                      </div>
                      <div className="col-8">
                        <div className="h-100">
                          <p className="text-body mb-3"><i className="fa fa-calendar-alt me-2"></i>
                            January 23, 2025</p>
                          <a href="#" className="d-inline-block h4 mb-4">Tutorials for Learning
                            Development</a>
                          <div className="py-2 px-3 bg-light d-flex justify-content-between">
                            <p className="mb-0 text-body">By <a href="#" className="h6">Nguyễn Phùng
                              Hưng</a></p>
                            <p className="mb-0 text-body">In <a href="#" className="h6">Lifestyle</a>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6">
                  <div className="blog-item wow fadeInUp" data-wow-delay="0.7s">
                    <div className="row g-4">
                      <div className="col-4">
                        <div className="blog-item-img bg-dark h-100">
                          <a href="#">
                            <img src="img/blog-4.jpg" className="img-fluid w-100 h-100"
                              style={{ objectFit: 'cover' }} alt="Image" />
                          </a>
                        </div>
                      </div>
                      <div className="col-8">
                        <div className="h-100">
                          <p className="text-body mb-3"><i className="fa fa-calendar-alt me-2"></i>
                            January 26, 2025</p>
                          <a href="#" className="d-inline-block h4 mb-4">Tutorials for Learning
                            Development</a>
                          <div className="py-2 px-3 bg-light d-flex justify-content-between">
                            <p className="mb-0 text-body">By <a href="#" className="h6">Nguyễn Phùng
                              Hưng</a></p>
                            <p className="mb-0 text-body">In <a href="#" className="h6">Design</a></p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 wow fadeInUp" data-wow-delay="0.9s">
                  <div className="blog-btn d-flex justify-content-center">
                    <p className="mb-0 me-2">For More Works Visit</p>
                    <a href="#" className="btn d-inline-block p-0">Our Blog</a>
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

export default Blog;
