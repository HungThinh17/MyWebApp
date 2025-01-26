import React from 'react';
import { FC } from 'react';

// Types
interface SocialMediaLink {
  platform: string;
  url: string;
  icon: string;
}

interface PersonalDetails {
  phone: string;
  skype: string;
  address: string;
  nationality: string;
  email: string;
  freelanceStatus: string;
}

// Constants
const SOCIAL_MEDIA_LINKS: SocialMediaLink[] = [
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

const PERSONAL_DETAILS: PersonalDetails = {
  phone: '+84 988172302',
  skype: 'nguyenphunghung',
  address: 'Danang, Vietnam',
  nationality: 'Vietnamese',
  email: 'nphung75@gmail.com',
  freelanceStatus: 'Available'
};

// Component for the header section
const AboutHeader: FC = () => (
  <div className="col-12 col-lg-3">
    <div className="about-header bg-dark h-100 pt-6 pe-6 pb-6">
      <div 
        className="text-start d-flex flex-column justify-content-center wow fadeInUp"
        data-wow-delay="0.1s"
      >
        <p className="text-white sub-title">About Me</p>
        <h1 className="display-6 text-white mb-0">Software Engineer based in Vietnam</h1>
      </div>
    </div>
  </div>
);

// Component for social media links
const SocialMediaLinks: FC = () => (
  <div className="sosial-icon">
    {SOCIAL_MEDIA_LINKS.map(({ platform, url, icon }) => (
      <a
        key={platform}
        className="btn btn-primary btn-sm-square me-3"
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Visit ${platform}`}
      >
        <i className={`${icon} text-white`} />
      </a>
    ))}
  </div>
);

// Component for personal information
const PersonalInformation: FC = () => {
  const renderInfoItem = (label: string, value: string) => (
    <p key={label} className="mb-0">
      <strong className="fw-bold text-dark">{label}: </strong>
      {value}
    </p>
  );

  return (
    <div className="row g-4 mb-4">
      <div className="col-6">
        {renderInfoItem('Phone', PERSONAL_DETAILS.phone)}
        {renderInfoItem('Skype', PERSONAL_DETAILS.skype)}
        {renderInfoItem('Address', PERSONAL_DETAILS.address)}
      </div>
      <div className="col-6">
        {renderInfoItem('Nationality', PERSONAL_DETAILS.nationality)}
        {renderInfoItem('Email', PERSONAL_DETAILS.email)}
        {renderInfoItem('Freelancer', PERSONAL_DETAILS.freelanceStatus)}
      </div>
    </div>
  );
};

// Component for the profile image section
const ProfileImage: FC = () => (
  <div className="col-xl-5">
    <div className="about-img bg-light p-4 wow fadeInUp" data-wow-delay="0.1s">
      <img 
        src="img/about.jpg" 
        className="img-fluid w-100" 
        alt="Profile" 
        loading="lazy"
      />
      <SocialMediaLinks />
    </div>
  </div>
);

// Component for the bio section
const BiographySection: FC = () => (
  <div className="col-xl-7 wow fadeInUp" data-wow-delay="0.3s">
    <h4 className="mb-4">Hello, I'm Nguyễn Phùng Hưng, Based in Vietnam</h4>
    <p className="mb-4">
      Experienced Software Engineer with over 10 years in the industry,
      skilled in software architecture solutions and development, including testing and
      maintenance. Proficient in electrical hardware design and analysis, with a strong
      technical foundation.
    </p>
    <PersonalInformation />
    <a 
      href="#" 
      className="btn btn-primary py-2 px-4"
      onClick={(e) => {
        e.preventDefault();
        // Add CV download logic here
      }}
    >
      <i className="fas fa-download me-2" />
      Download My CV
    </a>
  </div>
);

// Main About component
const About: FC = () => {
  return (
    <div className="container-fluid" id="pigraAbout">
      <div className="container">
        <div className="row g-0">
          <AboutHeader />
          <div className="col-12 col-lg-9">
            <div className="about-content h-100 pt-6 ps-6 pb-6">
              <div className="row g-5">
                <ProfileImage />
                <BiographySection />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
