import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const FooterSection = styled.footer`
  background-color: #f8f9fa;
  padding: 4rem 0 2rem;
  color: #6c757d;
`;

const FooterLogo = styled.div`
  text-align: center;
  margin-bottom: 3rem;
  
  img {
    height: 80px;
    width: auto;
  }
`;

const FooterTitle = styled.h4`
  font-size: 1.2rem;
  color: #4a4a4a;
  margin-bottom: 1.5rem;
  font-weight: 500;
`;

const ContactInfo = styled.div`
  margin-bottom: 1rem;
`;

const ContactText = styled.p`
  margin-bottom: 0.5rem;
`;

const ContactLink = styled.a`
  color: #6c9dc6;
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`;

const LocationInfo = styled.div`
  margin-bottom: 1rem;
`;

const LocationText = styled.p`
  margin-bottom: 0.5rem;
`;

const DirectionsLink = styled.a`
  color: #6c9dc6;
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`;

const BrokerCheckLogo = styled.img`
  max-width: 200px;
  height: auto;
  margin-bottom: 1rem;
`;

const FooterBottom = styled.div`
  border-top: 1px solid #dee2e6;
  margin-top: 3rem;
  padding-top: 2rem;
  text-align: center;
`;

const FooterLink = styled(Link)`
  color: #6c9dc6;
  text-decoration: none;
  margin: 0 1rem;
  
  &:hover {
    text-decoration: underline;
  }
`;

const Copyright = styled.p`
  margin-top: 1rem;
  font-size: 0.9rem;
`;

const Footer: React.FC = () => {
  return (
    <FooterSection>
      <Container>
        <FooterLogo>
          <img src="/logo192.png" alt="Capital Protection Group" />
        </FooterLogo>
        
        <Row>
          <Col md={4}>
            <FooterTitle>Contact Us</FooterTitle>
            <ContactInfo>
              <ContactText>Phone: 305.373.1070</ContactText>
              <ContactText>Toll Free: 800.646.1136</ContactText>
              <ContactText>Email:</ContactText>
              <ContactLink href="mailto:r.pert@capitalprotect.net">
                r.pert@capitalprotect.net
              </ContactLink>
            </ContactInfo>
          </Col>
          
          <Col md={4}>
            <FooterTitle>Our Location</FooterTitle>
            <LocationInfo>
              <LocationText>1680 Michigan Ave., Suite 700</LocationText>
              <LocationText>Miami Beach, FL 33139</LocationText>
              <DirectionsLink 
                href="https://maps.google.com/?q=1680+Michigan+Ave+Suite+700+Miami+Beach+FL+33139" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Get Directions
              </DirectionsLink>
            </LocationInfo>
          </Col>
          
          <Col md={4}>
            <FooterTitle>Check Us Out</FooterTitle>
            <a 
              href="https://brokercheck.finra.org/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <BrokerCheckLogo src="https://via.placeholder.com/200x80?text=BrokerCheck" alt="BrokerCheck" />
            </a>
          </Col>
        </Row>
        
        <FooterBottom>
          <div>
            <FooterLink to="/privacy">Privacy Policy</FooterLink>
            <FooterLink to="/terms">Terms of Use</FooterLink>
            <FooterLink to="/disclosure">View Full Disclosure</FooterLink>
          </div>
          <Copyright>
            &copy; {new Date().getFullYear()} Capital Protection Group. All Rights Reserved.
          </Copyright>
        </FooterBottom>
      </Container>
    </FooterSection>
  );
};

export default Footer;
