import React from 'react';
import { StyledBtn, StyledList } from './FeedBack.styled';

export const FeedBack = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      <StyledList>
        {options.map(option => {
          return (
            <li key={option}>
              <StyledBtn onClick={() => onLeaveFeedback(option)}>
                {option}
              </StyledBtn>
            </li>
          );
        })}
      </StyledList>
    </div>
  );
};
