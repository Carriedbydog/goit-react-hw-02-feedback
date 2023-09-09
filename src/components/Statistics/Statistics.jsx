import React from 'react';
import PropTypes from 'prop-types';
import { StyledList } from './Statisctics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <div>
      <StyledList>
        <li>
          <p>Good:{good}</p>
        </li>
        <li>
          <p>Neutral:{neutral}</p>
        </li>
        <li>
          <p>Bad:{bad}</p>
        </li>
        <li>
          <p>Total:{total}</p>
        </li>
        <li>
          <p>Positive feedback:{positivePercentage}%</p>
        </li>
      </StyledList>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.object,
  neutral: PropTypes.object,
  bad: PropTypes.object,
  total: PropTypes.func.isRequired,
  positivePercentage: PropTypes.func.isRequired,
};
