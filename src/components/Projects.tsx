// src/components/ProjectsPage.tsx
import React from 'react';

interface Project {
  id: number;
  title: string;
  description: string;
  link: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Portfolio Website',
    description: 'A personal portfolio website to showcase my projects, blog posts, and contact information.',
    link: 'https://github.com/yourusername/portfolio-website',
  },
  {
    id: 2,
    title: 'React To-Do App',
    description: 'A simple to-do list application built with React and TypeScript.',
    link: 'https://github.com/yourusername/react-todo-app',
  },
  {
    id: 3,
    title: 'Node.js REST API',
    description: 'A RESTful API built with Node.js and Express for managing a collection of resources.',
    link: 'https://github.com/yourusername/nodejs-rest-api',
  },
];

const ProjectsPage: React.FC = () => {
  return (
    <div>
      <h1>Projects</h1>
      <ul>
        {projects.map(project => (
          <li key={project.id}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectsPage;
