/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSingleRobot } from '../../actions/action';

class DetailRobot extends Component {
  componentDidMount() {
    // eslint-disable-next-line react/destructuring-assignment
    this.props.fetchSingleRobot(this.props.location.pathname.slice(1))
  }

  render() {
    return (
      <div>
        <div className="card">
          <img src="https://robohash.org/id?100x100" alt="RobotAvatar" />
        </div>
        <div className="robot-info">
          <h2>name</h2>
          <p>email</p>
          <h3>Adress</h3>
          <p>City</p>
          <p>ZipCode</p>
          <h3>Phone</h3>
          <p>WebSite</p>
        </div>
      </div>
    );
  }
}

export default connect(null, { fetchSingleRobot })(DetailRobot);