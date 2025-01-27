import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FC } from 'react';
import type { BlogPost } from '../blogs';
import { blogPosts } from '../blogs';

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

const BlogContent: FC<{ post: BlogPost }> = ({ post }) => (
  <div className="col-8">
    <div className="h-100">
      <p className="text-body mb-3">
        <i className="fa fa-calendar-alt me-2"></i>
        {post.date}
      </p>
      <Link to={`/blog/${post.id}`} className="d-inline-block h4 mb-4">
        {post.title}
      </Link>
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

const ViewMoreSection: FC = () => (
  <div className="col-12 wow fadeInUp" data-wow-delay="0.9s">
    <div className="blog-btn d-flex justify-content-center">
      <p className="mb-0 me-2">For More Works Visit</p>
      <a href="#" className="btn d-inline-block p-0">Our Blog</a>
    </div>
  </div>
);

const Blog: FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const fetchedPosts = await blogPosts();
      setPosts(fetchedPosts);
    };
    fetchPosts();
  }, []);

  return (
    <div className="container-fluid" id="pigraBlog">
      <div className="container">
        <div className="row g-0">
          <BlogHeader />
          <div className="col-12 col-lg-9">
            <div className="blog-content h-100 pt-6 ps-6 pb-6">
              <div className="row g-4">
                {posts.map((post) => (
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
