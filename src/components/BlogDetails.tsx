import React from 'react';
import { useParams } from 'react-router-dom';
import { FC } from 'react';
import DetailHeader from './DetailHeader';
import { getBlogPost } from '../blogs';

const BlogDetails: FC = () => {
  const { id } = useParams();
  const post = getBlogPost(parseInt(id || '1')); 

  if (!post) {
    return <div>Blog post not found</div>;
  }

  return (
    <div>
      <DetailHeader title={post.title} className="bg-dark text-white p-2 rounded mb-4" />
      <img src={post.image} alt={post.title} />
      <p>{post.content}</p>
    </div>
  );
};

export default BlogDetails;
