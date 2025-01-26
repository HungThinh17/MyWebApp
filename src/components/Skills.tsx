import React, { FC } from 'react';

// Types
interface Skill {
  id: string;
  icon: string;
  percentage: number;
  name: string;
  delay: string;
}

interface SkillsProps {
  className?: string;
}

// Constants
const SKILLS: Skill[] = [
  {
    id: 'android-sdk',
    icon: 'fab fa-android',
    percentage: 80,
    name: 'Android SDK',
    delay: '0.1s'
  },
  {
    id: 'autosar',
    icon: 'fab fa-autoprefixer',
    percentage: 85,
    name: 'AUTOSAR framework knowledge',
    delay: '0.3s'
  },
  {
    id: 'embedded',
    icon: 'fas fa-microchip',
    percentage: 90,
    name: 'Embedded System',
    delay: '0.5s'
  },
  {
    id: 'cpp',
    icon: 'fab fa-cuttlefish',
    percentage: 90,
    name: 'C/C++ Programming',
    delay: '0.7s'
  },
  {
    id: 'android-dev',
    icon: 'fab fa-android',
    percentage: 90,
    name: 'Android Development',
    delay: '0.1s'
  },
  {
    id: 'devops',
    icon: 'fab fa-dev',
    percentage: 90,
    name: 'DevOps',
    delay: '0.3s'
  },
  {
    id: 'design',
    icon: 'fas fa-pencil-ruler',
    percentage: 90,
    name: 'Design Software',
    delay: '0.5s'
  },
  {
    id: 'analysis',
    icon: 'fas fa-brain',
    percentage: 90,
    name: 'Critical Analysis',
    delay: '0.7s'
  }
];

// Components
const SkillsHeader: FC = () => (
  <div className="col-lg-3">
    <div className="skills-header h-100 bg-dark pt-6 pe-6 pb-6">
      <div 
        className="text-start d-flex flex-column justify-content-center wow fadeInUp"
        data-wow-delay="0.1s"
      >
        <p className="text-white sub-title">Skills</p>
        <h1 className="display-6 text-white mb-0">My expertise skills</h1>
      </div>
    </div>
  </div>
);

interface SkillIconProps {
  icon: string;
  name: string;
}

const SkillIcon: FC<SkillIconProps> = ({ icon, name }) => (
  <div className="text-primary text-center mb-3">
    <span 
      className={`${icon} fa-3x`}
      aria-label={`${name} icon`}
    />
  </div>
);

interface SkillPercentageProps {
  percentage: number;
}

const SkillPercentage: FC<SkillPercentageProps> = ({ percentage }) => (
  <div className="counter-counting d-flex justify-content-center">
    <h4 className="display-6" data-toggle="counter-up">
      {percentage}
    </h4>
    <h4 className="display-6">%</h4>
  </div>
);

interface SkillNameProps {
  name: string;
}

const SkillName: FC<SkillNameProps> = ({ name }) => (
  <p className="mb-0">{name}</p>
);

interface SkillItemProps extends Skill {}

const SkillItem: FC<SkillItemProps> = ({
  icon,
  percentage,
  name,
  delay
}) => (
  <div className="col-6 col-md-4 col-lg-4 col-xl-3">
    <div 
      className="skills-item text-center rounded p-4 h-100 wow fadeInUp"
      data-wow-delay={delay}
    >
      <SkillIcon icon={icon} name={name} />
      <SkillPercentage percentage={percentage} />
      <SkillName name={name} />
    </div>
  </div>
);

const SkillsContent: FC = () => (
  <div className="col-lg-9">
    <div className="skills-content h-100 pt-6 ps-6 pb-6">
      <div className="row g-4">
        {SKILLS.map((skill) => (
          <SkillItem key={skill.id} {...skill} />
        ))}
      </div>
    </div>
  </div>
);

// Error Boundary HOC
const withErrorBoundary = <P extends object>(
  WrappedComponent: React.ComponentType<P>
) => {
  return class ErrorBoundary extends React.Component<P, { hasError: boolean }> {
    state = { hasError: false };

    static getDerivedStateFromError() {
      return { hasError: true };
    }

    render() {
      if (this.state.hasError) {
        return (
          <div className="error-boundary">
            <h2>Something went wrong.</h2>
            <button onClick={() => this.setState({ hasError: false })}>
              Try again
            </button>
          </div>
        );
      }

      return <WrappedComponent {...this.props} />;
    }
  };
};

// Counter animation hook
const useCounter = (end: number, duration: number = 2000) => {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [end, duration]);

  return count;
};

// Memoized components
const MemoizedSkillItem = React.memo(SkillItem);
const MemoizedSkillIcon = React.memo(SkillIcon);
const MemoizedSkillPercentage = React.memo(SkillPercentage);

const Skills: FC<SkillsProps> = ({ 
  className = "container-fluid" 
}) => {
  return (
    <div className={className}>
      <div className="container">
        <div className="row g-0">
          <SkillsHeader />
          <SkillsContent />
        </div>
      </div>
    </div>
  );
};

// Enhanced Skills component with error boundary
const EnhancedSkills = withErrorBoundary(Skills);

export default EnhancedSkills;
