import React from 'react';

import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Service from './components/Service';
import Portfolio from './components/Portfolio';
import Blog from './components/Blog';
import Testimonial from './components/Testimonial';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      {/* Spinner Start */}
      {/* <div id="spinner"
        className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
        <div className="spinner-border text-primary" style={{width: '3rem', height: '3rem'}} role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div> */}
      {/* Spinner End */}

      <Navbar />
      <Header />
      <About />
      <Education />
      <Experience />
      <Skills />
      <Service />
      <Portfolio />
      <Blog />
      <Testimonial />
      <Contact />
      <Footer />

      {/* Back to Top */}
      <a href="#" className="btn btn-primary btn-lg-square back-to-top"><i className="fa fa-arrow-up"></i></a>
    </div>
  );
}

export default App;
