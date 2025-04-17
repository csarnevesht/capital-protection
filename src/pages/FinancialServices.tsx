import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import styled from 'styled-components';

const PageHeader = styled.div`
  background: linear-gradient(135deg, #e0f2ff 0%, #6c9dc6 100%);
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 76px;
`;

const PageTitle = styled.h1`
  color: #4a4a4a;
  font-weight: 400;
  text-align: center;
`;

const ContentSection = styled.section`
  padding: 5rem 0;
`;

const SectionTitle = styled.h2`
  color: #4a4a4a;
  font-weight: 400;
  margin-bottom: 2rem;
  text-align: center;
`;

const ServiceCard = styled(Card)`
  border: none;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  margin-bottom: 2rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  }
`;

const CardTitle = styled(Card.Title)`
  color: #4a4a4a;
  font-weight: 500;
`;

const CardText = styled(Card.Text)`
  color: #6c757d;
`;

const FinancialServices: React.FC = () => {
  const services = [
    {
      id: 1,
      title: 'Retirement Planning',
      description: 'We help you prepare for retirement by creating a comprehensive plan that addresses your income needs, healthcare costs, and legacy goals.',
      icon: '🏦'
    },
    {
      id: 2,
      title: 'Investment Management',
      description: 'Our investment strategies are designed to help you grow and protect your assets while managing risk appropriately for your situation.',
      icon: '📈'
    },
    {
      id: 3,
      title: 'Income Strategies',
      description: 'We develop income strategies that aim to provide reliable income throughout your retirement years, helping you maintain your lifestyle.',
      icon: '💰'
    },
    {
      id: 4,
      title: 'Tax Planning',
      description: 'Our tax planning strategies are designed to help minimize your tax burden and maximize your retirement income.',
      icon: '📝'
    },
    {
      id: 5,
      title: 'Estate Planning',
      description: 'We help you create a legacy plan that ensures your assets are distributed according to your wishes and your loved ones are taken care of.',
      icon: '📋'
    },
    {
      id: 6,
      title: 'Insurance Solutions',
      description: 'We offer insurance solutions that help protect you, your family, and your assets from unexpected events and expenses.',
      icon: '🛡️'
    }
  ];

  return (
    <>
      <PageHeader>
        <PageTitle>FINANCIAL SERVICES</PageTitle>
      </PageHeader>
      <ContentSection>
        <Container>
          <SectionTitle>Our Services</SectionTitle>
          <Row>
            {services.map(service => (
              <Col md={4} key={service.id}>
                <ServiceCard>
                  <Card.Body>
                    <div className="text-center mb-3" style={{ fontSize: '3rem' }}>
                      {service.icon}
                    </div>
                    <CardTitle className="text-center">{service.title}</CardTitle>
                    <CardText>{service.description}</CardText>
                  </Card.Body>
                </ServiceCard>
              </Col>
            ))}
          </Row>
        </Container>
      </ContentSection>
    </>
  );
};

export default FinancialServices;
