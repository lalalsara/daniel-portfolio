import React from 'react';
import { Container } from 'react-bootstrap';
import Title from '../Title/Title';

const Resume = () => {
  return (
    <Container>
    <Title title="Resume" />
          <div className="about-wrapper__info">
            <p className="about-wrapper__info-text">
                I promise I've done a lot of very cool and impressive things.
            </p>
          </div>
  </Container>
  );
};

export default Resume;
