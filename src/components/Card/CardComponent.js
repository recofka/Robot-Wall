/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';

const CardComponent = ({ id, name, email }) => (
  <div className="card">
    <Link to={`/robot/${id}`} className="link">
      <img src={`https://robohash.org/${id}?100x100`} alt="RobotAvatar" />
      <div className="robot-info">
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </Link>
  </div>
);

export default CardComponent;
