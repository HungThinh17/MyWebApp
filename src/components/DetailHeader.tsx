import React, { FC } from 'react';
import { Link } from 'react-router-dom';

interface DetailHeaderProps {
  title: string;
  backTo?: string;
  backToLink?: string;
  className?: string;
}

const DetailHeader: FC<DetailHeaderProps> = ({ title, backTo = 'Blogs', backToLink = '/blog', className = 'detail-header' }) => (
  <header className={`${className} text-white`}>
    <h1 className='text-white text-center'>{title}</h1>
    {backToLink && (
      <Link to={backToLink} className='text-white'>{backTo}</Link>
    )}
  </header>
);

export default DetailHeader;
