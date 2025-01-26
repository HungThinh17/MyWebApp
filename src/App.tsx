import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './styles/styles.css';
import './styles/bootstrap.min.css';
import './lib/animate/animate.min.css';
import './lib/lightbox/css/lightbox.min.css';

import './lib/wow/wow.min.js';
import './lib/easing/easing.min.js';
import './lib/waypoints/waypoints.min.js';
import './lib/counterup/counterup.min.js';
import './lib/lightbox/js/lightbox.min.js';

// Lazy load components for better performance
const Navbar = lazy(() => import('./components/Navbar'));
const Header = lazy(() => import('./components/Header'));
const About = lazy(() => import('./components/About'));
const Education = lazy(() => import('./components/Education'));
const Experience = lazy(() => import('./components/Experience'));
const Skills = lazy(() => import('./components/Skills'));
const Service = lazy(() => import('./components/Service'));
const Portfolio = lazy(() => import('./components/Portfolio'));
const Blog = lazy(() => import('./components/Blog'));
const Testimonial = lazy(() => import('./components/Testimonial'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));
const LoadingSpinner = lazy(() => import('./components/Spinner'));
const BackToTop = lazy(() => import('./components/BackToTop'));


// Main content section
const MainContent: React.FC = () => (
  <main>
    <Header />
    <About />
    <Education />
    <Experience />
    <Skills />
  </main>
);

// Portfolio section
const PortfolioSection: React.FC = () => (
  <section>
    <Service />
    <Portfolio />
    <Blog />
    <Testimonial />
  </section>
);

interface AppProps {}

const App: React.FC<AppProps> = () => {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div>
        {isLoading && <LoadingSpinner />}
        <Suspense fallback={<LoadingSpinner />}>
          <Navbar />
          <Routes>
            <Route path="/" element={<MainContent />}>
              <Route path="/about" element={<About />} />
              <Route path="/education" element={<Education />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/skills" element={<Skills />} />
            </Route>
            <Route path="/portfolio" element={<PortfolioSection />}>
              <Route path="service" element={<Service />} />
              <Route path="portfolio-items" element={<Portfolio />} />
              <Route path="blog" element={<Blog />} />
              <Route path="testimonial" element={<Testimonial />} />
            </Route>
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
          <BackToTop />
        </Suspense>
      </div>
    </Router>
  );
};

export default App;
