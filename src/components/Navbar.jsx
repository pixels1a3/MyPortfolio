import React, { useState } from 'react';
import { Navbar as BSNavbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  const handleClose = () => {
    setExpanded(false);
  };

  const navItems = [
    { to: 'hero', label: 'Home' },
    { to: 'projects', label: 'Projects' },
    { to: 'about', label: 'About' },
    { to: 'contact', label: 'Contact' },
  ];

  return (
    <BSNavbar
      expand="lg"
      fixed="top"
      bg="dark"
      variant="dark"
      className="shadow py-3"
      expanded={expanded}
      onToggle={handleToggle}
    >
      <Container fluid="sm" className="position-relative">
        <BSNavbar.Toggle
          aria-controls="navbarNav"
          onClick={handleToggle}
          className="ms-auto custom-toggle"
        />
        <BSNavbar.Collapse id="navbarNav">
          <Nav className="mx-auto justify-content-center w-100">
            {navItems.map((item, index) => (
              <Nav.Item key={index} className="mx-2 mx-lg-3">
                <Link
                  to={item.to}
                  smooth={true}
                  duration={200}
                  offset={-70}
                  className="nav-link text-white fs-4 fs-lg-4 custom-nav-link"
                  onClick={handleClose}
                >
                  {item.label}
                </Link>
              </Nav.Item>
            ))}
          </Nav>
        </BSNavbar.Collapse>
      </Container>
    </BSNavbar>
  );
};

export default Navbar;