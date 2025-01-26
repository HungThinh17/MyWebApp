import React from 'react';


const Contact = () => {
  return (
    <div className="container-fluid" id="pigraContact">
      <div className="container">
        <div className="row g-0">
          <div className="col-lg-3">
            <div className="contact-header h-100 bg-dark pt-6 pe-6 pb-6">
              <div className="text-start d-flex flex-column justify-content-center wow fadeInUp"
                data-wow-delay="0.1s">
                <p className="text-white sub-title">Contact Me</p>
                <h1 className="display-6 text-white mb-0">Let’s Start A New Project</h1>
              </div>
            </div>
          </div>
          <div className="col-lg-9">
            <div className="contact-content h-100 pt-6 ps-6 pb-6">
              <div className="bg-light p-4">
                <div className="row g-5">
                  <div className="col-xl-5 wow fadeInUp" data-wow-delay="0.1s">
                    <p className="mb-4">The contact form is currently inactive. Get a functional and working
                      contact form with Ajax & PHP in a few minutes. Just copy and paste the files,
                      add a little code and you're done. <a className="text-primary fw-bold"
                        href="https://htmlcodex.com/contact-form">Download Now</a>.</p>
                    <div className="d-flex mb-4">
                      <div className="btn-xl-square bg-primary text-white me-3">
                        <i className="fas fa-map-marker-alt"></i>
                      </div>
                      <div>
                        <h4>Address</h4>
                        <p className="mb-0">Danang, Vietnam</p>
                      </div>
                    </div>
                    <div className="d-flex mb-4">
                      <div className="btn-xl-square bg-primary text-white me-3">
                        <i className="fas fa-envelope"></i>
                      </div>
                      <div>
                        <h4>Mail Us</h4>
                        <p className="mb-0">nphung75@gmail.com</p>
                      </div>
                    </div>
                    <div className="d-flex">
                      <div className="btn-xl-square bg-primary text-white me-3">
                        <i className="fa fa-phone-alt"></i>
                      </div>
                      <div>
                        <h4>Telephone</h4>
                        <p className="mb-0">(+84) 988172302</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-7 wow fadeInUp" data-wow-delay="0.3s">
                    <div>
                      <form>
                        <div className="row g-3">
                          <div className="col-lg-12 col-xl-6">
                            <div className="form-floating">
                              <input type="text" className="form-control border-0" id="name"
                                placeholder="Your Name" />
                              <label htmlFor="name">Your Name</label>
                            </div>
                          </div>
                          <div className="col-lg-12 col-xl-6">
                            <div className="form-floating">
                              <input type="email" className="form-control border-0" id="email"
                                placeholder="Your Email" />
                              <label htmlFor="email">Your Email</label>
                            </div>
                          </div>
                          <div className="col-lg-12 col-xl-6">
                            <div className="form-floating">
                              <input type="phone" className="form-control border-0" id="phone"
                                placeholder="Phone" />
                              <label htmlFor="phone">Your Phone</label>
                            </div>
                          </div>
                          <div className="col-lg-12 col-xl-6">
                            <div className="form-floating">
                              <input type="text" className="form-control border-0" id="project"
                                placeholder="Project" />
                              <label htmlFor="project">Your Project</label>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="form-floating">
                              <input type="text" className="form-control border-0" id="subject"
                                placeholder="Subject" />
                              <label htmlFor="subject">Subject</label>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="form-floating">
                              <textarea className="form-control border-0"
                                placeholder="Leave a message here" id="message"
                                style={{ height: '120px' }}></textarea>
                              <label htmlFor="message">Message</label>
                            </div>
                          </div>
                          <div className="col-12">
                            <button className="btn btn-primary w-100 py-3">Send Message</button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-12 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="rounded">
                        <iframe className="rounded w-100" style={{ height: '400px' }}
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61351.48300815842!2d108.22263744510775!3d16.041202453674817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314219c792252a13%3A0x1df0cb4b86727e06!2sDa%20Nang%2C%20Vietnam!5e0!3m2!1sen!2ssa!4v1737081207212!5m2!1sen!2ssa"
                          loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
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

export default Contact;
