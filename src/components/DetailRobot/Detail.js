/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSingleRobot } from '../../actions/action';
import './Detail.css';

class DetailRobot extends Component {
  componentDidMount() {
    // eslint-disable-next-line react/destructuring-assignment
    this.props.fetchSingleRobot(this.props.location.pathname.slice(1));
  }

  render() {
    if (!this.props.SingleRobot.address) {
      return (<div>Loading...</div>);
    }

    const {
      id, name, username, email, phone, website,
    } = this.props.SingleRobot;

    const {
      city, street, suite,
    } = this.props.SingleRobot.address;

    const {
      catchPhrase, bs,
    } = this.props.SingleRobot.company;

    return ( console.log(this.props),
      <div>
        <div className="card">
          <img src={`https://robohash.org/${id}?80x80`} alt="RobotAvatar" />
        </div>
        <div className="card-detail">
          <div>
            <h2>{name} - {username}</h2>
          </div>
          <div className="card-info">
            <h3>Adress</h3>
            <p>{street} street</p>
            <p>{suite}</p>
            <p>{city}</p>

          </div>
          <div className="card-info">
            <h3>Contact</h3>
            <p>{email}</p>
            <p>{phone}</p>
            <p>{website}</p>
          </div>
          <div className="card-info">
            <h3>company</h3>
            <p>{this.props.SingleRobot.company.name}</p>
            <p>{catchPhrase}</p>
            <p>{bs}</p>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => (
  {
    SingleRobot: state.SingleRobot,
    adress: state.SingleRobot.address,
  });

export default connect(mapStateToProps, { fetchSingleRobot })(DetailRobot);
