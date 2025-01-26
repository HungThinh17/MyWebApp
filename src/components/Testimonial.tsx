import React, { FC, useState } from 'react';
import OwlCarousel from 'react-owl-carousel';

// Types
interface Testimonial {
  id: string;
  name: string;
  position: string;
  company: string;
  testimonial: string;
  imagePath: string;
  rating: number;
  delay: string;
}

interface TestimonialProps {
  className?: string;
}

// Constants
const TESTIMONIALS: Testimonial[] = [
  {
    id: 'testimonial-1',
    name: 'Master Truong Phong Tuyen',
    position: 'Lecturer',
    company: 'Electronics and Telecommunications Department - Can Tho University',
    testimonial: 'Nguyễn Phùng Hưng is a dedicated and skilled software engineer with a strong foundation in both software and hardware development.',
    imagePath: 'img/testimonial-img-1.jpg',
    rating: 5,
    delay: '0.1s'
  },
  {
    id: 'testimonial-2',
    name: 'Mr Nguyen Trong Tien',
    position: 'Manager',
    company: 'T.E.A Solutions Joint Stock Company',
    testimonial: 'Nguyễn Phùng Hưng\'s expertise in embedded systems and his ability to develop innovative solutions have been invaluable to our projects.',
    imagePath: 'img/testimonial-img-2.jpg',
    rating: 5,
    delay: '0.3s'
  },
  {
    id: 'testimonial-3',
    name: 'Mr Pham Phu Anh Nghiem',
    position: 'Project Leader',
    company: 'TNHH Datalogic Vietnam',
    testimonial: 'Nguyễn Phùng Hưng\'s contributions to our barcode scanner product have been significant, and his technical skills are exceptional.',
    imagePath: 'img/testimonial-img-3.jpg',
    rating: 5,
    delay: '0.5s'
  },
  {
    id: 'testimonial-4',
    name: 'Huynh Tran Khanh',
    position: 'Project Leader',
    company: 'Sioux Technologies Asia',
    testimonial: 'Nguyễn Phùng Hưng\'s work in data analytics and automation testing has greatly improved our project outcomes.',
    imagePath: 'img/testimonial-img-4.jpg',
    rating: 5,
    delay: '0.7s'
  }
];

// Components
const TestimonialHeader: FC = () => (
  <div className="col-lg-3">
    <div className="testimonial-header h-100 bg-dark pt-6 pe-6 pb-6">
      <div 
        className="text-start d-flex flex-column justify-content-center wow fadeInUp"
        data-wow-delay="0.1s"
      >
        <p className="text-white sub-title">Testimonial</p>
        <h1 className="display-6 text-white mb-0">What People Say</h1>
      </div>
    </div>
  </div>
);

interface TestimonialImageProps {
  imagePath: string;
  name: string;
}

const TestimonialImage: FC<TestimonialImageProps> = ({ imagePath, name }) => (
  <div className="testimonial-inner-img border border-primary border-3 me-4"
    style={{ width: '100px', height: 'auto' }}>
    <img 
      src={imagePath} 
      className="img-fluid"
      style={{ objectFit: 'cover' }} 
      alt={`${name}'s testimonial`}
      loading="lazy"
    />
  </div>
);

interface TestimonialAuthorProps {
  name: string;
  position: string;
  company: string;
}

const TestimonialAuthor: FC<TestimonialAuthorProps> = ({ 
  name, 
  position, 
  company 
}) => (
  <div>
    <h5 className="mb-2">{name}</h5>
    <p className="mb-0">{position} - {company}</p>
  </div>
);

interface RatingStarsProps {
  rating: number;
  maxRating?: number;
}

const RatingStars: FC<RatingStarsProps> = ({ 
  rating, 
  maxRating = 5 
}) => (
  <div className="d-flex justify-content-sm-center">
    {Array.from({ length: maxRating }).map((_, index) => (
      <i 
        key={index}
        className={`fas fa-star ${index < rating ? 'text-primary' : 'text-muted'}`}
        aria-hidden="true"
      />
    ))}
    <span className="visually-hidden">Rating: {rating} out of {maxRating} stars</span>
  </div>
);

interface TestimonialItemProps extends Testimonial {
  isActive?: boolean;
}

const TestimonialItem: FC<TestimonialItemProps> = ({
  name,
  position,
  company,
  testimonial,
  imagePath,
  rating,
  isActive
}) => (
  <div className={`testimonial-item ${isActive ? 'active' : ''}`}>
    <div className="row gy-4 gx-2 mb-4">
      <div className="col-sm-6">
        <div className="d-flex justify-content-sm-end">
          <TestimonialImage imagePath={imagePath} name={name} />
        </div>
      </div>
      <div className="col-sm-6">
        <TestimonialAuthor 
          name={name} 
          position={position} 
          company={company} 
        />
      </div>
    </div>
    <div className="text-sm-center">
      <p>{testimonial}</p>
      <RatingStars rating={rating} />
    </div>
  </div>
);

const TestimonialCarousel: FC = () => {
  return (
    <OwlCarousel 
      className="owl-theme"
      loop
      margin={10}
      nav
      items={1}
      dots={false}
      autoplay
      autoplayTimeout={5000}
      autoplayHoverPause
    >
      {TESTIMONIALS.map((testimonial) => (
        <div key={testimonial.id} className="item">
          <TestimonialItem {...testimonial} />
        </div>
      ))}
    </OwlCarousel>
  );
};

const TestimonialContent: FC = () => (
  <div className="col-lg-9">
    <div className="testimonial-content h-100 pt-6 ps-6 pb-6">
      <TestimonialCarousel />
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
const MemoizedTestimonialItem = React.memo(TestimonialItem);
const MemoizedTestimonialImage = React.memo(TestimonialImage);
const MemoizedRatingStars = React.memo(RatingStars);

const Testimonial: FC<TestimonialProps> = ({ 
  className = "container-fluid" 
}) => {
  return (
    <div className={className}>
      <div className="container">
        <div className="row g-0">
          <TestimonialHeader />
          <TestimonialContent />
        </div>
      </div>
    </div>
  );
};

// Enhanced Testimonial component with error boundary
const EnhancedTestimonial = withErrorBoundary(Testimonial);

export default EnhancedTestimonial;
