import React from 'react';
import { StyledTitle } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <div>
      <StyledTitle>{title}</StyledTitle>
      {children}
    </div>
  );
};
