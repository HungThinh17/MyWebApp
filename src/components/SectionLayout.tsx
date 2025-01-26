import React from 'react';

interface SectionLayoutProps {
  children: React.ReactNode;
  headerContent: React.ReactNode;
}

const SectionLayout: React.FC<SectionLayoutProps> = ({ children, headerContent }) => {
  return (
    <div className="container-fluid">
      <div className="container">
        <div className="row g-0">
          <div className="col-12 col-lg-3">
            <div className="session-header bg-dark h-100 pt-6 pe-6 pb-6">
              {headerContent}
            </div>
          </div>
          <div className="col-12 col-lg-9">
            <div className="session-content h-100 pt-6 ps-6 pb-6">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionLayout;
