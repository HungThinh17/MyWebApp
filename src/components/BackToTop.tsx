import React from 'react';
import { FC } from 'react';

const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = React.useState(false);

  // Show button when page is scrolled up to given distance
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the event listener
  React.useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return isVisible ? (
    <a
      href="#"
      className="btn btn-primary btn-lg-square back-to-top"
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      <i className="fa fa-arrow-up"></i>
    </a>
  ) : null;
};

export default BackToTop;