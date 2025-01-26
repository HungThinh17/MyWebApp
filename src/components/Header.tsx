import React, { FC } from 'react';

// Types
interface ContactInfo {
  icon: string;
  content: string;
  link?: string;
  type?: 'email' | 'phone' | 'location' | 'website';
}

interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

interface HeaderProps {
  className?: string;
}

// Constants
const CONTACT_INFO: ContactInfo[] = [
  {
    icon: 'fas fa-map-marker-alt',
    content: 'Danang, Vietnam',
    type: 'location'
  },
  {
    icon: 'fas fa-envelope',
    content: 'nphung75@gmail.com',
    link: 'mailto:nphung75@gmail.com',
    type: 'email'
  },
  {
    icon: 'fa fa-phone-alt',
    content: '(+84) 988172302',
    link: 'tel:+84988172302',
    type: 'phone'
  },
  {
    icon: 'fab fa-firefox-browser',
    content: 'mylifemygamemyway.com',
    link: 'https://mylifemygamemyway.com',
    type: 'website'
  }
];

const SOCIAL_LINKS: SocialLink[] = [
  {
    platform: 'GitHub',
    url: 'https://github.com/HungThinh17',
    icon: 'fab fa-github'
  },
  {
    platform: 'LinkedIn',
    url: 'https://www.linkedin.com/in/phung-hung-nguyen-4a7428171/',
    icon: 'fab fa-linkedin-in'
  },
  {
    platform: 'YouTube',
    url: 'https://www.youtube.com/@hungti17',
    icon: 'fab fa-youtube'
  }
];

// Components
const HeaderBranding: FC = () => (
  <a 
    href="index.html" 
    className="navbar-brand d-inline-flex pb-5 wow fadeInUp" 
    data-wow-delay="0.1s"
  >
    <h1 className="display-6 text-white mb-0">Hưng Nguyễn</h1>
  </a>
);

const HeaderIntro: FC = () => (
  <div 
    className="text-start d-flex flex-column justify-content-center wow fadeInUp"
    data-wow-delay="0.3s"
  >
    <p className="text-white sub-title">👋 Hello I'm Hưng</p>
    <h1 className="display-6 text-white mb-0">
      Software Engineer with 10+ Years Experience
    </h1>
  </div>
);

const HeaderLeft: FC = () => (
  <div className="col-12 col-lg-3">
    <div className="header-content bg-dark h-100 pt-6 pe-6 pb-6">
      <HeaderBranding />
      <HeaderIntro />
    </div>
  </div>
);

interface ContactItemProps extends ContactInfo {
  className?: string;
}

const ContactItem: FC<ContactItemProps> = ({ 
  icon, 
  content, 
  link, 
  type,
  className = "d-flex align-items-center mb-2" 
}) => (
  <div className={className}>
    <i className={`${icon} text-primary me-3`}></i>
    {link ? (
      <a 
        href={link}
        className="text-dark mb-0"
        target={type === 'website' ? '_blank' : undefined}
        rel={type === 'website' ? 'noopener noreferrer' : undefined}
      >
        {content}
      </a>
    ) : (
      <p className="text-dark mb-0">{content}</p>
    )}
  </div>
);

const SocialLinks: FC = () => (
  <div className="d-flex">
    {SOCIAL_LINKS.map(({ platform, url, icon }) => (
      <a
        key={platform}
        className="btn btn-primary btn-sm-square me-3"
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Visit my ${platform} profile`}
      >
        <i className={`${icon} text-white`}></i>
      </a>
    ))}
  </div>
);

const ProfileImage: FC = () => (
  <div className="col-xl-6 wow fadeInUp" data-wow-delay="0.1s">
    <div 
      className="bg-light p-4" 
      style={{ borderRadius: '68% 32% 100% 0% / 0% 75% 25% 100%' }}
    >
      <img 
        src="img/header-img.jpg" 
        className="img-fluid w-100"
        style={{ borderRadius: '68% 32% 100% 0% / 0% 75% 25% 100%' }} 
        alt="Profile" 
        loading="lazy"
      />
    </div>
  </div>
);

const ProfileInfo: FC = () => (
  <div className="col-xl-6 wow fadeInUp" data-wow-delay="0.3s">
    <h1 className="display-6 mb-4">Experienced Software Engineer</h1>
    <p className="mb-4">
      Experienced Software Engineer with over 10 years in the industry,
      skilled in software architecture solutions and development, including testing and
      maintenance. Proficient in electrical hardware design and analysis, with a strong
      technical foundation.
    </p>
    {CONTACT_INFO.map((info, index) => (
      <ContactItem key={index} {...info} />
    ))}
    <SocialLinks />
  </div>
);

const HeaderRight: FC = () => (
  <div className="col-12 col-lg-9">
    <div className="header-img d-flex h-100 pt-6 ps-6 pb-6">
      <div className="row g-5">
        <ProfileImage />
        <ProfileInfo />
      </div>
    </div>
  </div>
);

const Header: FC<HeaderProps> = ({ 
  className = "container-fluid"
}) => {
  return (
    <div className={className} id="pigraHome">
      <div className="container">
        <div className="row g-0">
          <HeaderLeft />
          <HeaderRight />
        </div>
      </div>
    </div>
  );
};

export default Header;
