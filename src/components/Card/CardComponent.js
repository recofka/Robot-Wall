/* eslint-disable react/prop-types */
import React from 'react';
import './Card.css';

const CardComponent = ({ id, name, email }) => (
  <div className="card">
    <img src={`https://robohash.org/${id}?size=200x200`} alt="RobotAvatar" />
    <div className="robot-info">
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  </div>
);

export default CardComponent;
