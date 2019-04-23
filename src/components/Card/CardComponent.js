import React from 'react';
import './Card.css';

const CardComponent = (props) => {
  if (!props.robotsData) {
    return <div>Loading</div>;
  }
  return (
    <div>
      { props.robotsData.map(robot => (
        <div className="card" key={robot.id}>
          <img src={`https://robohash.org/${robot.id}?100x100`} alt="RobotAvatar" />
          <div className="robot-info">
            <h2>{robot.name}</h2>
            <p>{robot.email}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardComponent;
