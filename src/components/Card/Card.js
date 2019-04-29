/* eslint-disable react/prop-types */
import React from 'react';
import CardComponent from './CardComponent';

const Card = ({ robot }) => (
  <div>
    {robot.map((user, i) => (
      <CardComponent
        key={robot[i].id}
        id={robot[i].id}
        name={robot[i].name}
        email={robot[i].email}
      />
    ))
    }
  </div>
);
export default Card;
