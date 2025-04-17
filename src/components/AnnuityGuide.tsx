import React, { useState } from 'react';
import { Container, Row, Col, Button, Spinner } from 'react-bootstrap';
import styled from 'styled-components';
import { ArrowRightIcon, DownloadIcon } from '../utils/IconComponents';
import { getGuideDownloadLink } from '../services/api';

const GuideSection = styled.section`
  padding: 5rem 0;
  background-color: #fff;
`;

const GuideContainer = styled(Container)`
  display: flex;
  align-items: center;
`;

const GuideImage = styled.img`
  max-width: 100%;
  height: auto;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
`;

const GuideTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: #4a4a4a;
  font-weight: 400;
`;

const GuideText = styled.p`
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
  color: #6c757d;
`;

const BulletList = styled.ul`
  margin-bottom: 2rem;
  padding-left: 1.2rem;
`;

const BulletItem = styled.li`
  margin-bottom: 0.75rem;
  color: #6c757d;
  font-size: 1.1rem;
`;


const DownloadButton = styled(Button)`
  background-color: #6c9dc6;
  border-color: #6c9dc6;
  padding: 0.5rem 2rem;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  
  &:hover {
    background-color: #5a8bb4;
    border-color: #5a8bb4;
  }
  
  svg {
    margin-left: 0.5rem;
  }
`;

const SuccessMessage = styled.div`
  margin-top: 1rem;
  color: #28a745;
  font-weight: 500;
`;

const ErrorMessage = styled.div`
  margin-top: 1rem;
  color: #dc3545;
  font-weight: 500;
`;

const AnnuityGuide: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const [downloadError, setDownloadError] = useState('');

  const handleDownload = async () => {
    setIsLoading(true);
    setDownloadSuccess(false);
    setDownloadError('');
    
    try {
      const response = await getGuideDownloadLink('annuity-myths');
      console.log('Guide download link:', response);
      
      // In a real application, you would redirect to the download URL
      // or open it in a new tab
      // window.open(response.downloadUrl, '_blank');
      
      // For demo purposes, just show success message
      setDownloadSuccess(true);
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        setDownloadSuccess(false);
      }, 5000);
    } catch (error) {
      console.error('Error downloading guide:', error);
      setDownloadError('There was an error generating your download link. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <GuideSection>
      <GuideContainer>
        <Row className="align-items-center">
          <Col lg={5}>
            <GuideImage 
              src="https://via.placeholder.com/400x500?text=Annuity+Guide" 
              alt="Annuity Guide" 
            />
          </Col>
          <Col lg={7}>
            <GuideTitle>Do You Believe These 5 Annuity Myths?</GuideTitle>
            <GuideText>
              In this guide, we address common misconceptions about annuities to help you decide if an annuity might be right for you, including:
            </GuideText>
            <BulletList>
              <BulletItem>Annuities make accessing money impossible.</BulletItem>
              <BulletItem>Annuities are too complicated to understand.</BulletItem>
              <BulletItem>Savings are enough — why an annuity?</BulletItem>
              <BulletItem>Annuities have too many fees.</BulletItem>
              <BulletItem>Annuities are only for retirees.</BulletItem>
            </BulletList>
            <Button 
              size="lg" 
              onClick={handleDownload}
              disabled={isLoading}
              variant="primary"
              className="download-button"
            >
              {isLoading ? (
                <>
                  <Spinner
                    as="span"
                    animation="border"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                    className="me-2"
                  />
                  Generating Download...
                </>
              ) : (
                <>
                  Download Now! <ArrowRightIcon />
                </>
              )}
            </Button>
            
            {downloadSuccess && (
              <SuccessMessage>
                <DownloadIcon />
                Your download is ready! Check your downloads folder.
              </SuccessMessage>
            )}
            
            {downloadError && (
              <ErrorMessage>{downloadError}</ErrorMessage>
            )}
          </Col>
        </Row>
      </GuideContainer>
    </GuideSection>
  );
};

export default AnnuityGuide;
