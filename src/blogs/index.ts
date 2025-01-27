// Define the type
export type BlogPost = {
    id: number;
    image: string;
    date: string;
    title: string;
    author: string;
    category: string;
    content: string;
    pdfUrl?: string; // Optional PDF URL
    contentType?: 'text' | 'pdf'; // Specify content type
    delay?: string;
};

let blogPostsData: BlogPost[] = [];

export const blogPosts = async () => {
    try {
        const response = await fetch('/blogs/blogPosts.json');
        blogPostsData = await response.json();
        return blogPostsData;
    } catch (error) {
        console.error('Error loading blog posts:', error);
        return [];
    }
};

export const getBlogPost = (id: number): BlogPost | undefined => {
    return blogPostsData.find(post => post.id === id);
};
