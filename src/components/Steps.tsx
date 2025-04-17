import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StepsSection = styled.section`
  padding: 5rem 0;
  background-color: #f8f9fa;
`;

const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: 3rem;
  color: #4a4a4a;
  font-weight: 400;
`;

const StepCard = styled(Card)`
  border: none;
  background-color: transparent;
  text-align: center;
  margin-bottom: 2rem;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
  }
`;

const StepNumber = styled.div`
  font-size: 5rem;
  font-weight: 200;
  color: #e6e6e6;
  line-height: 1;
  margin-bottom: 1rem;
`;

const StepTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 500;
  color: #4a4a4a;
  margin-bottom: 1rem;
`;

const StepDescription = styled.p`
  color: #6c757d;
`;

const StepLink = styled(Link)`
  color: #6c9dc6;
  text-decoration: none;
  font-weight: 500;
  
  &:hover {
    text-decoration: underline;
  }
`;

const Steps: React.FC = () => {
  return (
    <StepsSection>
      <Container>
        <SectionTitle>Get started in 3 easy steps:</SectionTitle>
        <Row>
          <Col md={4}>
            <StepCard>
              <Card.Body>
                <StepNumber>01</StepNumber>
                <StepTitle>DISCOVER</StepTitle>
                <StepDescription>
                  Schedule a meeting to sit down with us and discover what your ideal retirement looks like.
                </StepDescription>
                <StepLink to="/schedule">Schedule a meeting</StepLink>
              </Card.Body>
            </StepCard>
          </Col>
          <Col md={4}>
            <StepCard>
              <Card.Body>
                <StepNumber>02</StepNumber>
                <StepTitle>EVALUATE</StepTitle>
                <StepDescription>
                  Using our proprietary process, we'll examine your current financial situation and determine your retirement needs.
                </StepDescription>
              </Card.Body>
            </StepCard>
          </Col>
          <Col md={4}>
            <StepCard>
              <Card.Body>
                <StepNumber>03</StepNumber>
                <StepTitle>IMPLEMENT</StepTitle>
                <StepDescription>
                  Receive a custom strategy to help you reach your unique retirement goals and objectives.
                </StepDescription>
              </Card.Body>
            </StepCard>
          </Col>
        </Row>
      </Container>
    </StepsSection>
  );
};

export default Steps;
