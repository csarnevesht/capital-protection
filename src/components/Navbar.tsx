import React, { useState } from 'react';
import { Navbar as BootstrapNavbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledNavbar = styled(BootstrapNavbar)`
  background-color: transparent;
  padding: 1rem 0;
  transition: all 0.3s ease;
  
  &.scrolled {
    background-color: rgba(255, 255, 255, 0.95);
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }
`;

const NavLink = styled(Nav.Link)`
  color: #4a4a4a;
  font-weight: 500;
  margin: 0 0.5rem;
  transition: color 0.3s ease;
  
  &:hover {
    color: #6c9dc6;
  }
`;

const Logo = styled.img`
  height: 60px;
  width: auto;
`;

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <StyledNavbar expand="lg" fixed="top" className={scrolled ? 'scrolled' : ''}>
      <Container>
        <BootstrapNavbar.Brand as={Link} to="/">
          <Logo src="/logo192.png" alt="Capital Protection Group" />
        </BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink as={Link} to="/financial-services">FINANCIAL SERVICES</NavLink>
            <NavLink as={Link} to="/our-team">OUR TEAM</NavLink>
            <NavLink as={Link} to="/media">MEDIA</NavLink>
            <NavLink as={Link} to="/events">ATTEND AN EVENT</NavLink>
            <NavLink as={Link} to="/schedule">SCHEDULE A MEETING</NavLink>
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </StyledNavbar>
  );
};

export default Navbar;
