import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinkStyle = ({ isActive }) =>
    isActive
      ? 'text-blue-600 font-semibold'
      : 'text-gray-700 hover:text-blue-600 transition';

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-pink-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-blue-600">My Portfolio</h1>

        {/* Hamburger Button - visible on mobile only */}
        <button
          onClick={toggleMenu}
          className="lg:hidden text-gray-700 focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Links - horizontal */}
        <div className="hidden lg:flex space-x-6 text-sm sm:text-base">
          <NavLink to="/" className={navLinkStyle}>Home</NavLink>
          <NavLink to="/resume" className={navLinkStyle}>Resume</NavLink>
          <NavLink to="/projects" className={navLinkStyle}>Projects</NavLink>
          <NavLink to="/contact" className={navLinkStyle}>Contact</NavLink>
        </div>
      </div>

      {/* Mobile menu dropdown - vertical list */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-pink-100 shadow-md px-4 pb-4 flex flex-col space-y-2">
          <NavLink
            to="/"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              (isActive
                ? 'text-blue-600 font-semibold'
                : 'text-gray-700 hover:text-blue-600 transition') +
              ' block px-3 py-2 rounded'
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/resume"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              (isActive
                ? 'text-blue-600 font-semibold'
                : 'text-gray-700 hover:text-blue-600 transition') +
              ' block px-3 py-2 rounded'
            }
          >
            Resume
          </NavLink>
          <NavLink
            to="/projects"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              (isActive
                ? 'text-blue-600 font-semibold'
                : 'text-gray-700 hover:text-blue-600 transition') +
              ' block px-3 py-2 rounded'
            }
          >
            Projects
          </NavLink>
          <NavLink
            to="/contact"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              (isActive
                ? 'text-blue-600 font-semibold'
                : 'text-gray-700 hover:text-blue-600 transition') +
              ' block px-3 py-2 rounded'
            }
          >
            Contact
          </NavLink>
        </div>
      )}
    </nav>
  );
}
