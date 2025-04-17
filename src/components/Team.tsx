import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import { PlayIcon } from '../utils/IconComponents';

const TeamSection = styled.section`
  padding: 5rem 0;
  background: linear-gradient(135deg, #e0f2ff 0%, #6c9dc6 100%);
  color: #4a4a4a;
  position: relative;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const SectionSubtitle = styled.h3`
  font-size: 2rem;
  color: #6c9dc6;
  font-style: italic;
  font-weight: 300;
  margin-bottom: 1rem;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: #4a4a4a;
  font-weight: 400;
  margin-bottom: 1.5rem;
`;

const SectionText = styled.p`
  font-size: 1.2rem;
  max-width: 800px;
  margin: 0 auto 2rem;
  color: #4a4a4a;
`;

const VideoContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  cursor: pointer;
  
  &:hover .play-button {
    background-color: rgba(108, 157, 198, 0.9);
    transform: scale(1.1);
  }
`;


const PlayButton = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80px;
  height: 80px;
  background-color: rgba(108, 157, 198, 0.8);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  
  svg {
    color: white;
    font-size: 2rem;
  }
`;

const VideoLink = styled.a`
  display: block;
  text-align: center;
  margin-top: 1rem;
  color: #6c9dc6;
  text-decoration: none;
  font-weight: 500;
  
  &:hover {
    text-decoration: underline;
  }
`;

const Team: React.FC = () => {
  return (
    <TeamSection>
      <Container>
        <SectionHeader>
          <SectionSubtitle>get to know</SectionSubtitle>
          <SectionTitle>Our Team</SectionTitle>
          <SectionText>
            Discover how we help individuals and families achieve their ideal retirements.
          </SectionText>
        </SectionHeader>
        <Row className="justify-content-center">
          <Col md={8}>
            <VideoContainer>
              <img 
                src="https://via.placeholder.com/600x400?text=Team+Video" 
                alt="Team Video Thumbnail" 
                className="img-fluid"
              />
              <PlayButton className="play-button">
                <PlayIcon />
              </PlayButton>
            </VideoContainer>
            <VideoLink href="#">Watch the video</VideoLink>
          </Col>
        </Row>
      </Container>
    </TeamSection>
  );
};

export default Team;
