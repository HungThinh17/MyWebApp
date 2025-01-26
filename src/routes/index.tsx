import React from 'react';
import components from '../components';

export const routes = [
  { path: '/about', Component: components.About },
  { path: '/education', Component: components.Education },
  { path: '/experience', Component: components.Experience },
  { path: '/skills', Component: components.Skills },
  { path: '/service', Component: components.Service },
  { path: '/portfolio', Component: components.Portfolio },
  { path: '/blog', Component: components.Blog },
  { path: '/testimonial', Component: components.Testimonial },
  { path: '/contact', Component: components.Contact },
];

export const PageContent: React.FC = () => (
  <div>
    <main>
      <components.Header />
      <components.About />
      <components.Education />
      <components.Experience />
      <components.Skills />
      <components.Service />
      <components.Portfolio />
      <components.Blog />
      <components.Testimonial />
      <components.Contact />
    </main>
  </div>
);
