import React from 'react';
import Hero from '../components/Hero';
import Steps from '../components/Steps';
import AnnuityGuide from '../components/AnnuityGuide';
import Events from '../components/Events';
import Team from '../components/Team';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Steps />
      <AnnuityGuide />
      <Events />
      <Team />
    </>
  );
};

export default HomePage;
