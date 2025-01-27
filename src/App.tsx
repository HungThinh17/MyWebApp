import React, { Suspense, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Styles imports
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './styles/styles.css';
import './styles/bootstrap.min.css';
import './lib/animate/animate.min.css';
import './lib/lightbox/css/lightbox.min.css';

// Third-party libraries
import $ from 'jquery';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// Local libraries
import './lib/wow/wow.min.js';
import './lib/easing/easing.min.js';
import './lib/waypoints/waypoints.min.js';
import './lib/counterup/counterup.min.js';
import './lib/lightbox/js/lightbox.min.js';

// Local imports
import components from './components';
import { routes, PageContent } from './routes';
import RouteHeader from './components/RouteHeader';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Initialize jQuery-based functionality
    $(document).ready(() => {
      // Add any jQuery initializations here
      setIsLoading(false);
    });

    return () => {
      // Cleanup if needed
    };
  }, []);

  if (isLoading) {
    return <components.LoadingSpinner />;
  }

  return (
    <Router>
      <div>
        <Suspense fallback={<components.LoadingSpinner />}>
          <components.Navbar />
          <Routes>
            <Route path="/" element={<PageContent />} />
            {routes.map(({ path, Component }) => (
              <Route key={path} path={path} element={<RouteHeader><Component /></RouteHeader>} />
            ))}
            <Route path="/blog/:id" element={<components.BlogDetails />} />
          </Routes>
          <components.Footer />
          <components.BackToTop />
        </Suspense>
      </div>
    </Router>
  );
};

export default App;
