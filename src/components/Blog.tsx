// src/components/BlogPage.tsx
import React from 'react';

interface BlogPost {
  id: number;
  title: string;
  summary: string;
  date: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'Understanding React Hooks',
    summary: 'An in-depth look at React Hooks and how they can simplify your code.',
    date: '2023-01-15',
  },
  {
    id: 2,
    title: 'Introduction to TypeScript',
    summary: 'A beginner’s guide to using TypeScript with JavaScript projects.',
    date: '2023-02-20',
  },
  {
    id: 3,
    title: 'Setting Up a Node.js Server',
    summary: 'Learn how to set up a basic server using Node.js and Express.',
    date: '2023-03-10',
  },
];

const BlogPage: React.FC = () => {
  return (
    <div>
      <h1>Blog</h1>
      <ul>
        {blogPosts.map(post => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.summary}</p>
            <p><em>{post.date}</em></p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogPage;
