"use client";

import { Link } from 'react-scroll';

const navLinks = [
  { to: 'home', label: 'Home' },
  { to: 'about', label: 'About' },
  { to: 'skills', label: 'Skills' },
  { to: 'projects', label: 'Projects' },
];

const Header = () => {
  return (
    <header className="bg-gray-900 bg-opacity-80 backdrop-blur-sm sticky top-0 z-50 w-full transition-all duration-300">
      <nav className="container mx-auto flex items-center justify-between p-4 text-white">
        <div className="text-2xl font-bold">
          <Link to="home" smooth={true} duration={500} className="cursor-pointer">
            MyPortfolio
          </Link>
        </div>
        <ul className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                smooth={true}
                duration={500}
                spy={true}
                activeClass="text-blue-400"
                className="cursor-pointer hover:text-blue-300 transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
