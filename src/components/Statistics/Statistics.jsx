import React from 'react';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  totalPositivePercentage,
}) => {
  return (
    <div>
      <ul>
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
        <li>Positive feedback:{totalPositivePercentage}%</li>
      </ul>
    </div>
  );
};
