// src/components/HomePage.tsx
import React from 'react';

const HomePage: React.FC = () => {
  return (
    <div>
      <h1>Welcome to Steven Yu's Portfolio</h1>
      <p>
        Hi, I'm Steven Yu, a passionate developer with a focus on full stack engineering using JavaScript, React, TypeScript, MongoDB, and other modern technologies. This portfolio showcases my projects, blog posts, and contact information.
      </p>
      <section>
        <h2>About Me</h2>
        <p>
          I recently completed an internship with UC Berkeley’s department of Chemical and Biomolecular Engineering, where I developed a passion for bridging biology and technology. I graduated with a B.A. in Data Science and am currently working on improving my skills as a full stack engineer.
        </p>
      </section>
      <section>
        <h2>Latest Projects</h2>
        <ul>
          <li>Project 1: Description...</li>
          <li>Project 2: Description...</li>
          <li>Project 3: Description...</li>
        </ul>
      </section>
      <section>
        <h2>Blog</h2>
        <ul>
          <li>Blog Post 1: Summary...</li>
          <li>Blog Post 2: Summary...</li>
          <li>Blog Post 3: Summary...</li>
        </ul>
      </section>
    </div>
  );
};

export default HomePage;