import React from 'react';
import { Container } from '@mui/material';
import Introduction from './Introduction';
import Values from './Values';
import CallToAction from './CallToAction';

const Aboutus = () => {
  return (
    <Container bgcolor="black">
      <Introduction />
      <Values />
      <CallToAction /> 
    </Container>
  );
};

export default Aboutus;
