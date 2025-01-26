import React, { FC } from 'react';

// Types
interface Education {
  institution: string;
  period: string;
  degree: string;
  description: string;
}

// Constants
const EDUCATION_DATA: Education[] = [
  {
    institution: 'Cantho University',
    period: '2008 - 2012',
    degree: 'Bachelors - Computer Engineering',
    description: 'Graduated in Sept 2012 with a GPA of 75%.'
  }
  // Add more education entries here as needed
];

// Components
interface SectionHeaderProps {
  title: string;
  subtitle: string;
}

const SectionHeader: FC<SectionHeaderProps> = ({ title, subtitle }) => (
  <div className="col-lg-3">
    <div className="education-header bg-dark h-100 pt-6 pe-6 pb-6">
      <div 
        className="text-start d-flex flex-column justify-content-center wow fadeInUp"
        data-wow-delay="0.1s"
      >
        <p className="text-white sub-title">{subtitle}</p>
        <h1 className="display-6 text-white mb-0">{title}</h1>
      </div>
    </div>
  </div>
);

interface EducationItemProps extends Education {
  delay?: string;
}

const EducationItem: FC<EducationItemProps> = ({
  institution,
  period,
  degree,
  description,
  delay = "0.1s"
}) => (
  <div 
    className="education-item rounded p-4 h-100 wow fadeInUp" 
    data-wow-delay={delay}
  >
    <div className="d-flex align-items-center mb-3">
      <p className="fs-5 mb-0 me-4">{institution}</p>
      <div>
        <span className="fa fa-calendar me-1"></span>
        {period}
      </div>
    </div>
    <h4 className="mb-3">{degree}</h4>
    <p className="mb-0">{description}</p>
  </div>
);

const EducationContent: FC = () => (
  <div className="col-lg-9">
    <div className="education-content h-100 pt-6 ps-6 pb-6">
      <div className="row g-4">
        {EDUCATION_DATA.map((education, index) => (
          <div className="col-12" key={`${education.institution}-${index}`}>
            <EducationItem {...education} />
          </div>
        ))}
      </div>
    </div>
  </div>
);

const Education: FC = () => {
  return (
    <div className="container-fluid">
      <div className="container">
        <div className="row g-0">
          <SectionHeader 
            title="My education qualification"
            subtitle="Education"
          />
          <EducationContent />
        </div>
      </div>
    </div>
  );
};

export default Education;
