import React from 'react';
import { useLocation } from 'react-router-dom';
import Layout from './Layout';
import DetailHeader from './DetailHeader';

interface RouteHeaderProps {
  children: React.ReactNode;
}

const RouteHeader: React.FC<RouteHeaderProps> = ({ children }) => {
  const location = useLocation();
  const path = location.pathname;
  let title = '';

  switch (path) {
    case '/about':
      title = 'About';
      break;
    case '/education':
      title = 'Education';
      break;
    case '/experience':
      title = 'Experience';
      break;
    case '/skills':
      title = 'Skills';
      break;
    case '/service':
      title = 'Service';
      break;
    case '/portfolio':
      title = 'Portfolio';
      break;
    case '/blog':
      title = 'Blog';
      break;
    case '/testimonial':
      title = 'Testimonial';
      break;
    case '/contact':
      title = 'Contact';
      break;
    default:
      title = 'Home';
  }

  return (
    <Layout>
      {path === '/' ? null : <DetailHeader title={title} backTo='Home' backToLink="/" className="bg-dark text-white p-2 rounded mb-1" />}
      {children}
    </Layout>
  );
};

export default RouteHeader;
