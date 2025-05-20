import React from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  const navItems = [
    { to: 'hero', label: 'Home' },
    { to: 'projects', label: 'Projects' },
    { to: 'about', label: 'About' },
    { to: 'contact', label: 'Contact' },
  ];

  return (
    <nav className="navbar navbar-expand-lg fixed-top bg-dark text-white shadow py-3">
      <div className="container-sm">
        <ul className="navbar-nav mx-auto flex-row justify-content-center">
          {navItems.map((item, index) => (
            <li key={index} className="nav-item mx-3">
              <Link
                to={item.to}
                smooth={true}
                duration={200}
                offset={-70}
                className="nav-link text-white fs-4 custom-nav-link"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;