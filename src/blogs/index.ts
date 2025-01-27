// Define the type
export type BlogPost = {
    id: number;
    image: string;
    date: string;
    title: string;
    author: string;
    category: string;
    content: string;
    delay?: string;
};

// Import and export the data
import blogPostsData from './blogPosts.json';

export const blogPosts = blogPostsData as BlogPost[];

export const getBlogPost = (id: number): BlogPost | undefined => {
    return blogPosts.find(post => post.id === id);
};
