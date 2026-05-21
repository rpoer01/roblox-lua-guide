import React from 'react';
import { robloxContent } from '../content';
import './Sidebar.css'; // We'll create this file next

const Sidebar: React.FC = () => {
  const headings = robloxContent.filter(
    (block) => block.type === 'heading' && (block.level === 1 || block.level === 2)
  );

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="sidebar">
      <h2>Table of Contents</h2>
      <ul>
        {headings.map((heading, index) => (
          <li key={index} className={`heading-level-${heading.level}`}>
            <a onClick={() => scrollToSection(heading.content!.replace(/\s+/g, '-').toLowerCase())}>
              {heading.content}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;
