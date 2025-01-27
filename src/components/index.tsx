import { lazy } from 'react';

const components = {
  Navbar: lazy(() => import('./Navbar')),
  Header: lazy(() => import('./Header')),
  About: lazy(() => import('./About')),
  Education: lazy(() => import('./Education')),
  Experience: lazy(() => import('./Experience')),
  Skills: lazy(() => import('./Skills')),
  Service: lazy(() => import('./Service')),
  Portfolio: lazy(() => import('./Portfolio')),
  Blog: lazy(() => import('./Blog')),
  Testimonial: lazy(() => import('./Testimonial')),
  Contact: lazy(() => import('./Contact')),
  Footer: lazy(() => import('./Footer')),
  LoadingSpinner: lazy(() => import('./Spinner')),
  BackToTop: lazy(() => import('./BackToTop')),
  BlogDetails: lazy(() => import('./BlogDetails')),
};

export default components;
