import React, { FC } from 'react';

// Types
interface SocialLink {
  platform: string;
  url: string;
  icon: string;
  ariaLabel: string;
}

// Constants
const SOCIAL_LINKS: SocialLink[] = [
  {
    platform: 'GitHub',
    url: 'https://github.com/HungThinh17',
    icon: 'fab fa-github',
    ariaLabel: 'Visit my GitHub profile'
  },
  {
    platform: 'LinkedIn',
    url: 'https://www.linkedin.com/in/phung-hung-nguyen-4a7428171/',
    icon: 'fab fa-linkedin-in',
    ariaLabel: 'Connect with me on LinkedIn'
  },
  {
    platform: 'YouTube',
    url: 'https://www.youtube.com/@hungti17',
    icon: 'fab fa-youtube',
    ariaLabel: 'Subscribe to my YouTube channel'
  }
];

// Components
const SocialLinks: FC = () => (
  <div className="d-flex justify-content-center">
    {SOCIAL_LINKS.map(({ platform, url, icon, ariaLabel }) => (
      <a
        key={platform}
        className="btn btn-primary btn-sm-square me-3"
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={ariaLabel}
      >
        <i className={`${icon} text-white`} />
      </a>
    ))}
  </div>
);

const Copyright: FC = () => (
  <span className="text-body">
    <a 
      href="#" 
      className="border-bottom text-white"
      onClick={(e) => e.preventDefault()}
    >
      <i className="fas fa-copyright text-body me-2" />
      Nguyễn Phùng Hưng
    </a>
    , All right reserved.
  </span>
);

interface FooterContentProps {
  className?: string;
  animationDelay?: string;
}

const FooterContent: FC<FooterContentProps> = ({ 
  className = "footer-content h-100 pt-6 ps-6 pb-6",
  animationDelay = "0.1s" 
}) => (
  <div className={className}>
    <div className="row g-4 align-items-center">
      <div className="col-12 text-center">
        <SocialLinks />
      </div>
      <div className="col-12 text-center">
        <Copyright />
      </div>
    </div>
  </div>
);

interface FooterProps {
  className?: string;
  containerClassName?: string;
}

const Footer: FC<FooterProps> = ({ 
  className = "container-fluid footer bg-dark border-bottom-0",
  containerClassName = "container wow fadeIn"
}) => {
  return (
    <div className={className}>
      <div className={containerClassName} data-wow-delay="0.1s">
        <div className="row g-0">
          <div className="col-12">
            <FooterContent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
