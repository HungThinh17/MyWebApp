import React, { Suspense } from 'react';

import './styles/styles.css';
import './styles/bootstrap.min.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

// Lazy load components for better performance
const Navbar = React.lazy(() => import('./components/Navbar'));
const Header = React.lazy(() => import('./components/Header'));
const About = React.lazy(() => import('./components/About'));
const Education = React.lazy(() => import('./components/Education'));
const Experience = React.lazy(() => import('./components/Experience'));
const Skills = React.lazy(() => import('./components/Skills'));
const Service = React.lazy(() => import('./components/Service'));
const Portfolio = React.lazy(() => import('./components/Portfolio'));
const Blog = React.lazy(() => import('./components/Blog'));
const Testimonial = React.lazy(() => import('./components/Testimonial'));
const Contact = React.lazy(() => import('./components/Contact'));
const Footer = React.lazy(() => import('./components/Footer'));
const LoadingSpinner = React.lazy(() => import('./components/Spinner'));
const BackToTop = React.lazy(() => import('./components/BackToTop'));

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
    <div>
      {isLoading && <LoadingSpinner />}
      <Suspense fallback={<LoadingSpinner />}>
        <Navbar />
        <MainContent />
        <PortfolioSection />
        <Contact />
        <Footer />
        <BackToTop />
      </Suspense>
    </div>
  );
};

export default App;
