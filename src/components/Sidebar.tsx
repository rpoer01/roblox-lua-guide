import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
import { robloxContent } from '../content';
import './Sidebar.css';

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const headings = robloxContent.filter(
    (block) => block.type === 'heading' && (block.level === 1 || block.level === 2)
  );

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false); // Close sidebar on mobile after clicking
    }
  };

  // Close sidebar when clicking outside on mobile
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const sidebar = document.querySelector('.sidebar');
      const toggle = document.querySelector('.mobile-toggle');
      if (isOpen && sidebar && !sidebar.contains(event.target as Node) && toggle && !toggle.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  return (
    <>
      <button 
        className="mobile-toggle" 
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <nav className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <h2>Contents</h2>
        </div>
        <ul>
          {headings.map((heading, index) => (
            <li key={index} className={`heading-level-${heading.level}`}>
              <a onClick={() => scrollToSection(heading.content!.replace(/\s+/g, '-').toLowerCase())}>
                {heading.level === 2 && <ChevronRight size={14} className="chevron" />}
                {heading.content}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      
      {isOpen && <div className="sidebar-overlay" onClick={() => setIsOpen(false)}></div>}
    </>
  );
};

export default Sidebar;
