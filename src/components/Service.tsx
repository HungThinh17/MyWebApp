import React, { FC } from 'react';

// Types
interface ServiceFeature {
  icon: string;
  text: string;
}

interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
  features: ServiceFeature[];
  delay: string;
}

interface ServiceProps {
  className?: string;
}

// Constants
const SERVICES: Service[] = [
  {
    id: 'software-dev',
    icon: 'fas fa-bezier-curve',
    title: 'Software Development',
    description: 'Developing and maintaining software applications using various programming languages and frameworks.',
    features: [
      { icon: 'fa fa-check', text: 'Requirement Analysis' },
      { icon: 'fa fa-check', text: 'Design Patterns' },
      { icon: 'fa fa-check', text: 'Test-Driven Development' }
    ],
    delay: '0.1s'
  },
  {
    id: 'embedded-sys',
    icon: 'fas fa-laptop-code',
    title: 'Embedded Systems',
    description: 'Designing and developing embedded systems for various applications including IoT and automotive infotainment.',
    features: [
      { icon: 'fa fa-check', text: 'Hardware Analysis' },
      { icon: 'fa fa-check', text: 'Microcontroller Programming' },
      { icon: 'fa fa-check', text: 'Real-time Systems' }
    ],
    delay: '0.3s'
  },
  {
    id: 'android-dev',
    icon: 'fab fa-app-store',
    title: 'Android Development',
    description: 'Developing Android applications using the Android SDK and other related technologies.',
    features: [
      { icon: 'fa fa-check', text: 'Android Audio Framework' },
      { icon: 'fa fa-check', text: 'Middleware Components' },
      { icon: 'fa fa-check', text: 'Android HAL' }
    ],
    delay: '0.5s'
  }
];

// Components
const ServiceHeader: FC = () => (
  <div className="col-lg-3">
    <div className="service-header h-100 bg-dark pt-6 pe-6 pb-6">
      <div 
        className="text-start d-flex flex-column justify-content-center wow fadeInUp"
        data-wow-delay="0.1s"
      >
        <p className="text-white sub-title">My Services</p>
        <h1 className="display-6 text-white mb-0">What I do for you</h1>
      </div>
    </div>
  </div>
);

interface ServiceIconProps {
  icon: string;
  title: string;
}

const ServiceIcon: FC<ServiceIconProps> = ({ icon, title }) => (
  <div className="col-xl-2">
    <i 
      className={`${icon} fa-3x`}
      aria-label={`${title} icon`}
    />
  </div>
);

interface ServiceTitleProps {
  title: string;
}

const ServiceTitle: FC<ServiceTitleProps> = ({ title }) => (
  <div className="col-xl-3">
    <a href="#" className="h4 mb-0" onClick={(e) => e.preventDefault()}>
      {title}
    </a>
  </div>
);

interface ServiceDescriptionProps {
  description: string;
}

const ServiceDescription: FC<ServiceDescriptionProps> = ({ description }) => (
  <div className="col-xl-4">
    <p className="mb-0">{description}</p>
  </div>
);

interface ServiceFeaturesProps {
  features: ServiceFeature[];
}

const ServiceFeatures: FC<ServiceFeaturesProps> = ({ features }) => (
  <div className="col-xl-3">
    {features.map((feature, index) => (
      <p key={index} className={index === features.length - 1 ? 'mb-0' : ''}>
        <i className={`${feature.icon} me-2`} />
        {feature.text}
      </p>
    ))}
  </div>
);

interface ServiceItemProps extends Service {}

const ServiceItem: FC<ServiceItemProps> = ({
  icon,
  title,
  description,
  features,
  delay
}) => (
  <div className="col-12">
    <div 
      className="service-item p-4 wow fadeInUp" 
      data-wow-delay={delay}
    >
      <div className="row g-4 align-items-center">
        <ServiceIcon icon={icon} title={title} />
        <ServiceTitle title={title} />
        <ServiceDescription description={description} />
        <ServiceFeatures features={features} />
      </div>
    </div>
  </div>
);

const ServiceContent: FC = () => (
  <div className="col-lg-9">
    <div className="service-content h-100 pt-6 ps-6 pb-6">
      <div className="row g-4">
        {SERVICES.map((service) => (
          <ServiceItem key={service.id} {...service} />
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

// Memoized components
const MemoizedServiceItem = React.memo(ServiceItem);
const MemoizedServiceIcon = React.memo(ServiceIcon);
const MemoizedServiceFeatures = React.memo(ServiceFeatures);

const Service: FC<ServiceProps> = ({ 
  className = "container-fluid" 
}) => {
  return (
    <div className={className} id="pigraService">
      <div className="container">
        <div className="row g-0">
          <ServiceHeader />
          <ServiceContent />
        </div>
      </div>
    </div>
  );
};

// Enhanced Service component with error boundary
const EnhancedService = withErrorBoundary(Service);

export default EnhancedService;
