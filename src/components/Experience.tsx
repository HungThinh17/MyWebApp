import React, { FC } from 'react';

// Types
interface WorkExperience {
  company: string;
  period: string;
  title: string;
  responsibilities: {
    category: string;
    items: string[];
  }[];
  delay?: string;
}

// Constants
const WORK_EXPERIENCES: WorkExperience[] = [
  {
    company: 'Freelancer',
    period: '12/2023 - Present',
    title: 'Software Engineer',
    responsibilities: [
      {
        category: 'Experience in requirement analysis and software application design, utilizing:',
        items: [
          'Object-oriented programming',
          'Design patterns',
          'Clean architecture principles',
          'Architectural view models'
        ]
      },
      {
        category: 'Expertise in software development and testing, including:',
        items: [
          'Creating test plans',
          'Implementing unit tests',
          'Instrumentation tests',
          'Integration tests',
          'Familiarity with Test-Driven Development (TDD)'
        ]
      },
      {
        category: 'Skilled in developing applications using:',
        items: [
          'JavaScript',
          'Java',
          'Kotlin',
          'C/C++',
          'Python'
        ]
      },
      {
        category: 'Experience working with popular libraries and frameworks. Familiar with software version control systems, including:',
        items: [
          'Google Repo',
          'Git',
          'SVN'
        ]
      },
      {
        category: 'Worked on several impactful projects, including:',
        items: [
          'Supporting customers in collecting image data on customized devices (e.g., Raspberry Pi)',
          'Developing and maintaining a SaaS product for tracking and managing user data, ensuring scalability and reliability'
        ]
      }
    ],
    delay: '0.1s'
  },
  {
    company: 'LG Electronics Development Vietnam Company Limited',
    period: '09/2022 - 10/2023',
    title: 'Chief Research Engineer',
    responsibilities: [
      {
        category: 'Extensive experience with the Android Audio Framework (AOSP), Android development, and debugging tools. Expertise in middleware components such as:',
        items: [
          'Audio Policy Manager',
          'AudioFlinger',
          'Android HAL',
          'Media Server',
          'Audio Server'
        ]
      },
      {
        category: 'Proficient in:',
        items: [
          'Design patterns',
          'Data structures',
          'Object-oriented programming concepts',
          'Multi-threading'
        ]
      },
      {
        category: 'Skilled in creating detailed software architecture, requirements, and design documents. Specialized experience with:',
        items: [
          'ALSA',
          'Audio HAL',
          'HIDL for Android systems'
        ]
      }
    ],
    delay: '0.3s'
  },
  {
    company: 'FPT Software',
    period: '12/2020 - 08/2022',
    title: 'Software Engineer',
    responsibilities: [
      {
        category: 'Experience with developing and testing Autosar-based embedded software components:',
        items: [
          'Scaling, modifying, and re-factoring existing software components to meet new architecture requirements',
          'Working with architecture and validation teams, tool vendors, and AUTOSAR basic software partners',
          'Performing code-level integration-related tasks such as replicating build environments, source code debugging, and continuously improving deployments'
        ]
      }
    ],
    delay: '0.5s'
  },
  {
    company: 'Sioux Technologies Asia',
    period: '11/2018 - 11/2020',
    title: 'Software Engineer',
    responsibilities: [
      {
        category: 'Experience researching, designing, implementing, and managing data analytic software under web technologies such as:',
        items: [
          'React JS',
          'Redux-Saga',
          'TypeScript',
          'Electron Packaging'
        ]
      },
      {
        category: 'Experience with automation testing and evaluating new programs using:',
        items: [
          'Selenium',
          'WebDriverIO',
          'Cucumber'
        ]
      }
    ],
    delay: '0.7s'
  },
  {
    company: 'Datalogic ADC Viet Nam',
    period: '03/2015 - 10/2018',
    title: 'Embedded Software Engineer',
    responsibilities: [
      {
        category: 'Experience with analysis hardware and development software for the Barcode Scanner product using:',
        items: [
          'Quadros RTOS',
          'Free RTOS'
        ]
      },
      {
        category: 'Support for testing and verifying product behavior. Support tools using:',
        items: [
          'OS Scripts',
          'C#',
          'C++'
        ]
      }
    ],
    delay: '0.9s'
  },
  {
    company: 'T.E.A Solutions',
    period: '10/2012 - 10/2014',
    title: 'Embedded Software Engineer',
    responsibilities: [
      {
        category: 'Experience with researching solutions and developing for IoT products. Experience designing electronic hardware devices using:',
        items: [
          'Altium',
          'OCAD Schematic',
          'PCB'
        ]
      },
      {
        category: 'Programming Embedded Microcontroller using:',
        items: [
          'C',
          'C++',
          'Microchip'
        ]
      },
      {
        category: 'Programming Application on PC using:',
        items: [
          'C#',
          'OS Scripts'
        ]
      }
    ],
    delay: '1.1s'
  }
];

// Components
const ExperienceHeader: FC = () => (
  <div className="col-lg-3">
    <div className="experience-header bg-dark h-100 pt-6 pe-6 pb-6">
      <div 
        className="text-start d-flex flex-column justify-content-center wow fadeInUp"
        data-wow-delay="0.1s"
      >
        <p className="text-white sub-title">Experience</p>
        <h1 className="display-6 text-white mb-0">My real work experience</h1>
      </div>
    </div>
  </div>
);

interface ResponsibilitySectionProps {
  category: string;
  items: string[];
}

const ResponsibilitySection: FC<ResponsibilitySectionProps> = ({ category, items }) => (
  <>
    <p className="mb-0">{category}</p>
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </>
);

const ExperienceItem: FC<WorkExperience> = ({
  company,
  period,
  title,
  responsibilities,
  delay = "0.1s"
}) => (
  <div 
    className="experience-item rounded p-4 h-100 wow fadeInUp" 
    data-wow-delay={delay}
  >
    <div className="d-flex align-items-center mb-3">
      <p className="fs-5 mb-0 me-4">{company}</p>
      <div>
        <span className="fa fa-calendar me-1"></span>
        {period}
      </div>
    </div>
    <h4 className="mb-3">{title}</h4>
    {responsibilities.map((resp, index) => (
      <ResponsibilitySection
        key={index}
        category={resp.category}
        items={resp.items}
      />
    ))}
  </div>
);

const ExperienceContent: FC = () => (
  <div className="col-lg-9">
    <div className="experience-content h-100 pt-6 ps-6 pb-6">
      <div className="row g-4">
        {WORK_EXPERIENCES.map((experience, index) => (
          <div className="col-12" key={`${experience.company}-${index}`}>
            <ExperienceItem {...experience} />
          </div>
        ))}
      </div>
    </div>
  </div>
);

interface ExperienceProps {
  className?: string;
}

const Experience: FC<ExperienceProps> = ({ className = "container-fluid" }) => {
  return (
    <div className={className}>
      <div className="container">
        <div className="row g-0">
          <ExperienceHeader />
          <ExperienceContent />
        </div>
      </div>
    </div>
  );
};

export default Experience;
