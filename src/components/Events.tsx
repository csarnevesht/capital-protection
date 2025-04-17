import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Card, Spinner } from 'react-bootstrap';
import styled from 'styled-components';
import { ArrowRightIcon, CalendarIcon } from '../utils/IconComponents';
import { Link } from 'react-router-dom';
import { getEvents } from '../services/api';

const EventsSection = styled.section`
  padding: 5rem 0;
  background-color: #f8f9fa;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: #4a4a4a;
  font-weight: 400;
`;

const SectionText = styled.p`
  font-size: 1.1rem;
  margin-bottom: 2rem;
  color: #6c757d;
  max-width: 600px;
`;


const ViewButton = styled(Button)`
  background-color: #6c9dc6;
  border-color: #6c9dc6;
  padding: 0.5rem 2rem;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  margin-bottom: 2rem;
  
  &:hover {
    background-color: #5a8bb4;
    border-color: #5a8bb4;
  }
  
  svg {
    margin-left: 0.5rem;
  }
`;

const UpcomingTitle = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  color: #4a4a4a;
  font-weight: 500;
`;

const EventCard = styled(Card)`
  border: none;
  border-radius: 0;
  background-color: transparent;
  margin-bottom: 1.5rem;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const EventDate = styled.h4`
  font-size: 1.2rem;
  font-weight: 500;
  color: #4a4a4a;
  margin-bottom: 0.5rem;
`;

const EventTitle = styled.h5`
  font-size: 1.1rem;
  font-weight: 400;
  color: #4a4a4a;
  margin-bottom: 0.5rem;
`;

const EventLocation = styled.p`
  font-size: 1rem;
  color: #6c757d;
  margin-bottom: 0.5rem;
`;

const RegisterLink = styled(Link)`
  color: #6c9dc6;
  text-decoration: none;
  font-weight: 500;
  
  &:hover {
    text-decoration: underline;
  }
`;

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
`;

const ErrorMessage = styled.div`
  color: #dc3545;
  text-align: center;
  padding: 2rem;
`;

const NoEventsMessage = styled.div`
  text-align: center;
  padding: 2rem;
  color: #6c757d;
  
  svg {
    font-size: 2rem;
    margin-bottom: 1rem;
    color: #6c9dc6;
  }
`;

interface Event {
  id: number;
  date: string;
  title: string;
  time: string;
  location: string;
  description?: string;
  link: string;
}

const Events: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const data = await getEvents();
        setEvents(data);
      } catch (error) {
        console.error('Error fetching events:', error);
        setError('Unable to load upcoming events. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchEvents();
  }, []);

  return (
    <EventsSection>
      <Container>
        <Row>
          <Col lg={5}>
            <SectionTitle>Attend a Live Event</SectionTitle>
            <SectionText>
              Attend one of our informational seminars to learn more about retirement income strategies, wealth management and more.
            </SectionText>
            <Button
              as="a"
              href="/events"
              variant="primary"
              className="view-button"
            >
              View Calendar <ArrowRightIcon />
            </Button>
          </Col>
          <Col lg={7}>
            <UpcomingTitle>UPCOMING EVENTS:</UpcomingTitle>
            
            {isLoading ? (
              <LoadingContainer>
                <Spinner animation="border" role="status" variant="primary">
                  <span className="visually-hidden">Loading...</span>
                </Spinner>
              </LoadingContainer>
            ) : error ? (
              <ErrorMessage>{error}</ErrorMessage>
            ) : events.length === 0 ? (
              <NoEventsMessage>
                <CalendarIcon />
                <p>No upcoming events at this time. Please check back later.</p>
              </NoEventsMessage>
            ) : (
              events.map((event: Event) => (
                <EventCard key={event.id}>
                  <Card.Body>
                    <EventDate>{event.date}</EventDate>
                    <EventTitle>{event.title}</EventTitle>
                    <EventLocation>
                      {event.time} | {event.location}
                    </EventLocation>
                    <RegisterLink to={event.link}>Register</RegisterLink>
                  </Card.Body>
                </EventCard>
              ))
            )}
          </Col>
        </Row>
      </Container>
    </EventsSection>
  );
};

export default Events;
