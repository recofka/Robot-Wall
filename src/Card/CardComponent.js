import React from 'react';
import './Card.css';

const CardComponent = () => (
  <div className="card">
    <img src="https://robohash.org/fererer?150x150" alt="RobotAvatar" />
    <div className="robot-info">
      <h2>Robot Roo</h2>
      <p>robert.roo@email.com</p>
    </div>
  </div>
);
export default CardComponent;
