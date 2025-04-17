import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeroSection = styled.section`
  background: linear-gradient(135deg, #e0f2ff 0%, #6c9dc6 100%);
  height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  color: #4a4a4a;
`;

const HeroContent = styled.div`
  text-align: center;
  padding: 2rem;
  margin-top: 4rem;
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 1.5rem;
  font-weight: 300;
  color: #4a4a4a;
  
  .highlight {
    color: #6c9dc6;
    font-style: italic;
  }
`;

const HeroSubtitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  font-weight: 400;
  color: #4a4a4a;
`;

const HeroText = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const StyledButton = styled(Button)`
  background-color: #6c9dc6;
  border-color: #6c9dc6;
  padding: 0.5rem 2rem;
  font-weight: 500;
  
  &:hover {
    background-color: #5a8bb4;
    border-color: #5a8bb4;
  }
`;

const Hero: React.FC = () => {
  return (
    <HeroSection>
      <Container>
        <Row>
          <Col>
            <HeroContent>
              <HeroTitle>
                <span className="highlight">how are you protecting your</span>
              </HeroTitle>
              <HeroSubtitle>Future?</HeroSubtitle>
              <HeroText>We can help you prepare, starting today.</HeroText>
              <Button
                as="a"
                href="/schedule"
                size="lg"
                className="styled-button"
                variant="primary"
              >
                Schedule a Meeting
              </Button>
            </HeroContent>
          </Col>
        </Row>
      </Container>
    </HeroSection>
  );
};

export default Hero;
