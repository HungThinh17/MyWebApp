import React from 'react';
import { useParams } from 'react-router-dom';
import { FC } from 'react';
import DetailHeader from './DetailHeader';

interface BlogPost {
  id: number;
  image: string;
  date: string;
  title: string;
  author: string;
  category: string;
  content: string; 
}

const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    image: '/img/blog-1.jpg',
    date: 'January 12, 2025',
    title: 'Secrets of the Mobile Application',
    author: 'Nguyễn Phùng Hưng',
    category: 'Technology',
    content: 'This is the content of blog post 1.  It discusses the secrets of mobile application development.'
  },
  {
    id: 2,
    image: '/img/blog-2.jpg',
    date: 'January 18, 2025',
    title: 'How to Create Quality Figma Design',
    author: 'Nguyễn Phùng Hưng',
    category: 'Design',
    content: 'This is the content of blog post 2.  It provides tips on creating high-quality designs in Figma.'
  },
  {
    id: 3,
    image: '/img/blog-3.jpg',
    date: 'January 23, 2025',
    title: 'Tutorials for Learning Development',
    author: 'Nguyễn Phùng Hưng',
    category: 'Lifestyle',
    content: 'This is the content of blog post 3.  It lists tutorials for learning web development.'
  },
  {
    id: 4,
    image: '/img/blog-4.jpg',
    date: 'January 26, 2025',
    title: 'Tutorials for Learning Development',
    author: 'Nguyễn Phùng Hưng',
    category: 'Design',
    content: 'This is the content of blog post 4.  It lists tutorials for learning design.'
  }
];

const BlogDetails: FC = () => {
  const { id } = useParams();
  const post = BLOG_POSTS.find(post => post.id === parseInt(id || '1')); 

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
