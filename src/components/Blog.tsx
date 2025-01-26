import React from 'react';
import { FC } from 'react';

// Types
interface BlogPost {
  id: number;
  image: string;
  date: string;
  title: string;
  author: string;
  category: string;
  delay: string;
}

// Constants
const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    image: '/img/blog-1.jpg',
    date: 'January 12, 2025',
    title: 'Secrets of the Mobile Application',
    author: 'Nguyễn Phùng Hưng',
    category: 'Technology',
    delay: '0.1s'
  },
  {
    id: 2,
    image: '/img/blog-2.jpg',
    date: 'January 18, 2025',
    title: 'How to Create Quality Figma Design',
    author: 'Nguyễn Phùng Hưng',
    category: 'Design',
    delay: '0.3s'
  },
  {
    id: 3,
    image: '/img/blog-3.jpg',
    date: 'January 23, 2025',
    title: 'Tutorials for Learning Development',
    author: 'Nguyễn Phùng Hưng',
    category: 'Lifestyle',
    delay: '0.5s'
  },
  {
    id: 4,
    image: '/img/blog-4.jpg',
    date: 'January 26, 2025',
    title: 'Tutorials for Learning Development',
    author: 'Nguyễn Phùng Hưng',
    category: 'Design',
    delay: '0.7s'
  }
];

// Component for the header section
const BlogHeader: FC = () => (
  <div className="col-12 col-lg-3">
    <div className="about-header bg-dark h-100 pt-6 pe-6 pb-6">
      <div 
        className="text-start d-flex flex-column justify-content-center wow fadeInUp"
        data-wow-delay="0.1s"
      >
        <p className="text-white sub-title">Blog</p>
        <h1 className="display-6 text-white mb-0">Recent Posts</h1>
      </div>
    </div>
  </div>
);

// Component for blog post image
const BlogImage: FC<{ image: string }> = ({ image }) => (
  <div className="col-4">
    <div className="blog-item-img bg-dark h-100">
      <a href="#">
        <img 
          src={image} 
          className="img-fluid w-100 h-100"
          style={{ objectFit: 'cover' }} 
          alt="Blog Post" 
          loading="lazy"
        />
      </a>
    </div>
  </div>
);

// Component for blog post content
const BlogContent: FC<{ post: BlogPost }> = ({ post }) => (
  <div className="col-8">
    <div className="h-100">
      <p className="text-body mb-3">
        <i className="fa fa-calendar-alt me-2"></i>
        {post.date}
      </p>
      <a href="#" className="d-inline-block h4 mb-4">
        {post.title}
      </a>
      <div className="py-2 px-3 bg-light d-flex justify-content-between">
        <p className="mb-0 text-body">
          By <a href="#" className="h6">{post.author}</a>
        </p>
        <p className="mb-0 text-body">
          In <a href="#" className="h6">{post.category}</a>
        </p>
      </div>
    </div>
  </div>
);

// Component for individual blog post
const BlogPost: FC<{ post: BlogPost }> = ({ post }) => (
  <div className="col-xl-6">
    <div className="blog-item wow fadeInUp" data-wow-delay={post.delay}>
      <div className="row g-4">
        <BlogImage image={post.image} />
        <BlogContent post={post} />
      </div>
    </div>
  </div>
);

// Component for "View More" section
const ViewMoreSection: FC = () => (
  <div className="col-12 wow fadeInUp" data-wow-delay="0.9s">
    <div className="blog-btn d-flex justify-content-center">
      <p className="mb-0 me-2">For More Works Visit</p>
      <a href="#" className="btn d-inline-block p-0">Our Blog</a>
    </div>
  </div>
);

// Main Blog component
const Blog: FC = () => {
  return (
    <div className="container-fluid" id="pigraBlog">
      <div className="container">
        <div className="row g-0">
          <BlogHeader />
          <div className="col-12 col-lg-9">
            <div className="blog-content h-100 pt-6 ps-6 pb-6">
              <div className="row g-4">
                {BLOG_POSTS.map(post => (
                  <BlogPost key={post.id} post={post} />
                ))}
                <ViewMoreSection />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
