import { motion } from 'motion/react';
import { Linkedin, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ThemeToggle } from './ThemeToggle';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: 'Home', href: '/' },
    { name: 'CV', href: '/cv' },
    { name: 'Projects', href: '/projects' },
    { name: 'Highlights', href: '/highlights' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-nav">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold tracking-tight text-text">
          CALiu{/* <span className="text-primary">.</span> */}
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-6">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`text-sm font-medium transition-colors ${
                  location.pathname === link.href ? 'text-primary' : 'text-text-muted hover:text-text'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="h-4 w-px bg-border"></div>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <a href="https://www.linkedin.com/in/ca-liu" target="_blank" rel="noreferrer" className="text-text-muted hover:text-text transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <ThemeToggle />
          <button
            className="p-2 text-text-muted hover:text-text"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden absolute top-20 left-0 right-0 bg-bg border-b border-border shadow-lg py-4 px-6 flex flex-col gap-4"
        >
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              onClick={() => setIsOpen(false)}
              className={`text-base font-medium ${
                location.pathname === link.href ? 'text-primary' : 'text-text-muted hover:text-text'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="h-px w-full bg-border my-2"></div>
          <div className="flex items-center gap-4">
            <a href="https://www.linkedin.com/in/ca-liu" target="_blank" rel="noreferrer" className="text-text-muted hover:text-text">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
