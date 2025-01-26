import React, { FC } from 'react';

// Types
interface PortfolioItem {
  id: string;
  category: string;
  title: string;
  imagePath: string;
  delay: string;
}

interface PortfolioProps {
  className?: string;
}

// Constants
const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 'portfolio-1',
    category: 'Software Development',
    title: 'SaaS Product for User Data Management',
    imagePath: '/img/Portfolio-1.jpg',
    delay: '0.1s'
  },
  {
    id: 'portfolio-2',
    category: 'Embedded Systems',
    title: 'Barcode Scanner Product Development',
    imagePath: '/img/portfolio-2.jpg',
    delay: '0.3s'
  },
  {
    id: 'portfolio-3',
    category: 'Android Development',
    title: 'Automotive Infotainment System',
    imagePath: '/img/portfolio-3.jpg',
    delay: '0.5s'
  }
];

// Components
const PortfolioHeader: FC = () => (
  <div className="col-lg-3">
    <div className="portfolio-header h-100 bg-dark pt-6 pe-6 pb-6">
      <div 
        className="text-start d-flex flex-column justify-content-center wow fadeInUp"
        data-wow-delay="0.1s"
      >
        <p className="text-white sub-title">Portfolio</p>
        <h1 className="display-6 text-white mb-0">My Recent Works</h1>
      </div>
    </div>
  </div>
);

interface PortfolioImageProps {
  imagePath: string;
  title: string;
  id: string;
}

const PortfolioImage: FC<PortfolioImageProps> = ({ imagePath, title, id }) => (
  <div className="col-9 col-xl-4">
    <div className="portfolio-img">
      <div className="portfolio-img-inner">
        <img 
          src={imagePath} 
          className="img-fluid" 
          alt={title}
          loading="lazy" 
        />
      </div>
    </div>
  </div>
);

interface ViewImageButtonProps {
  imagePath: string;
  id: string;
}

const ViewImageButton: FC<ViewImageButtonProps> = ({ imagePath, id }) => (
  <div className="col-3 col-xl-2">
    <div className="view-img">
      <a 
        href={imagePath} 
        className="btn btn-primary btn-lg-square"
        data-lightbox={id}
        aria-label="View full size image"
      >
        <i className="fas fa-plus"></i>
      </a>
    </div>
  </div>
);

interface PortfolioItemProps extends PortfolioItem {
  isLast?: boolean;
}

const PortfolioItemComponent: FC<PortfolioItemProps> = ({
  id,
  category,
  title,
  imagePath,
  delay,
  isLast
}) => (
  <div 
    className={`portfolio-item py-5 ${!isLast ? 'border-bottom' : ''} wow fadeInUp`}
    data-wow-delay={delay}
  >
    <div className="row g-4 align-items-center">
      <div className="col-xl-6">
        <h4 className="text-body">{category}</h4>
        <h1 className="display-6 mb-0">{title}</h1>
      </div>
      <PortfolioImage 
        imagePath={imagePath} 
        title={title}
        id={id}
      />
      <ViewImageButton 
        imagePath={imagePath}
        id={id}
      />
    </div>
  </div>
);

const PortfolioContent: FC = () => (
  <div className="col-lg-9">
    <div className="portfolio-content h-100 pt-6 ps-6 pb-6">
      {PORTFOLIO_ITEMS.map((item, index) => (
        <PortfolioItemComponent 
          key={item.id}
          {...item}
          isLast={index === PORTFOLIO_ITEMS.length - 1}
        />
      ))}
    </div>
  </div>
);

const Portfolio: FC<PortfolioProps> = ({ 
  className = "container-fluid" 
}) => {
  return (
    <div className={className}>
      <div className="container">
        <div className="row g-0">
          <PortfolioHeader />
          <PortfolioContent />
        </div>
      </div>
    </div>
  );
};

// HOC for error boundary
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

// Memoized components for performance
const MemoizedPortfolioItem = React.memo(PortfolioItemComponent);
const MemoizedPortfolioImage = React.memo(PortfolioImage);
const MemoizedViewImageButton = React.memo(ViewImageButton);

// Enhanced Portfolio component with error boundary
const EnhancedPortfolio = withErrorBoundary(Portfolio);

export default EnhancedPortfolio;
