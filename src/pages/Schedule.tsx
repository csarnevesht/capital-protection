import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert, Spinner } from 'react-bootstrap';
import styled from 'styled-components';
import { scheduleMeeting } from '../services/api';

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
  margin-bottom: 1rem;
  text-align: center;
`;

const SectionSubtitle = styled.p`
  color: #6c757d;
  text-align: center;
  margin-bottom: 3rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
`;

const FormContainer = styled.div`
  background-color: #fff;
  padding: 2rem;
  border-radius: 5px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  max-width: 800px;
  margin: 0 auto;
`;

const FormGroup = styled(Form.Group)`
  margin-bottom: 1.5rem;
`;

const SubmitButton = styled(Button)`
  background-color: #6c9dc6;
  border-color: #6c9dc6;
  padding: 0.5rem 2rem;
  font-weight: 500;
  
  &:hover {
    background-color: #5a8bb4;
    border-color: #5a8bb4;
  }
`;

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  preferredDate: string;
  preferredTime: string;
  topic: string;
  message: string;
}

const Schedule: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    preferredDate: '',
    preferredTime: '',
    topic: '',
    message: ''
  });
  
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');
    
    try {
      // Send form data to the API
      const response = await scheduleMeeting(formData);
      console.log('Meeting scheduled:', response);
      
      // Reset form and show success message
      setShowSuccess(true);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        preferredDate: '',
        preferredTime: '',
        topic: '',
        message: ''
      });
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
    } catch (error) {
      console.error('Error scheduling meeting:', error);
      setErrorMessage('There was an error submitting your request. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <PageHeader>
        <PageTitle>SCHEDULE A MEETING</PageTitle>
      </PageHeader>
      <ContentSection>
        <Container>
          <SectionTitle>Let's Talk About Your Future</SectionTitle>
          <SectionSubtitle>
            Schedule a no-obligation meeting with one of our financial advisors to discuss your retirement goals and how we can help you achieve them.
          </SectionSubtitle>
          
          <FormContainer>
            {showSuccess && (
              <Alert variant="success" className="mb-4">
                Thank you for scheduling a meeting! We will contact you shortly to confirm your appointment.
              </Alert>
            )}
            
            <Form onSubmit={handleSubmit}>
              <Row>
                <Col md={6}>
                  <FormGroup controlId="firstName">
                    <Form.Label>First Name*</Form.Label>
                    <Form.Control 
                      type="text" 
                      name="firstName" 
                      value={formData.firstName} 
                      onChange={handleChange} 
                      required 
                    />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup controlId="lastName">
                    <Form.Label>Last Name*</Form.Label>
                    <Form.Control 
                      type="text" 
                      name="lastName" 
                      value={formData.lastName} 
                      onChange={handleChange} 
                      required 
                    />
                  </FormGroup>
                </Col>
              </Row>
              
              <Row>
                <Col md={6}>
                  <FormGroup controlId="email">
                    <Form.Label>Email*</Form.Label>
                    <Form.Control 
                      type="email" 
                      name="email" 
                      value={formData.email} 
                      onChange={handleChange} 
                      required 
                    />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup controlId="phone">
                    <Form.Label>Phone Number*</Form.Label>
                    <Form.Control 
                      type="tel" 
                      name="phone" 
                      value={formData.phone} 
                      onChange={handleChange} 
                      required 
                    />
                  </FormGroup>
                </Col>
              </Row>
              
              <Row>
                <Col md={6}>
                  <FormGroup controlId="preferredDate">
                    <Form.Label>Preferred Date</Form.Label>
                    <Form.Control 
                      type="date" 
                      name="preferredDate" 
                      value={formData.preferredDate} 
                      onChange={handleChange} 
                    />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup controlId="preferredTime">
                    <Form.Label>Preferred Time</Form.Label>
                    <Form.Select 
                      name="preferredTime" 
                      value={formData.preferredTime} 
                      onChange={handleChange}
                    >
                      <option value="">Select a time</option>
                      <option value="morning">Morning (9am - 12pm)</option>
                      <option value="afternoon">Afternoon (12pm - 4pm)</option>
                      <option value="evening">Evening (4pm - 6pm)</option>
                    </Form.Select>
                  </FormGroup>
                </Col>
              </Row>
              
              <FormGroup controlId="topic">
                <Form.Label>What would you like to discuss?</Form.Label>
                <Form.Select 
                  name="topic" 
                  value={formData.topic} 
                  onChange={handleChange}
                >
                  <option value="">Select a topic</option>
                  <option value="retirement">Retirement Planning</option>
                  <option value="investment">Investment Management</option>
                  <option value="income">Income Strategies</option>
                  <option value="tax">Tax Planning</option>
                  <option value="estate">Estate Planning</option>
                  <option value="insurance">Insurance Solutions</option>
                  <option value="other">Other</option>
                </Form.Select>
              </FormGroup>
              
              <FormGroup controlId="message">
                <Form.Label>Additional Information</Form.Label>
                <Form.Control 
                  as="textarea" 
                  rows={4} 
                  name="message" 
                  value={formData.message} 
                  onChange={handleChange} 
                  placeholder="Please share any specific questions or concerns you'd like to address during our meeting."
                />
              </FormGroup>
              
              <div className="text-center mt-4">
                <Button
                  type="submit"
                  size="lg"
                  variant="primary"
                  className="submit-button"
                >
                  Schedule Now
                </Button>
              </div>
            </Form>
          </FormContainer>
        </Container>
      </ContentSection>
    </>
  );
};

export default Schedule;
