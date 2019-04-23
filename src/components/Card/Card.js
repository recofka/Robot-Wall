import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardComponent from './CardComponent';
import { fetchRobots } from '../../actions/action';

class Card extends Component {
  componentDidMount() {
    this.props.fetchRobots()
  }

  render() {
    return (
      <CardComponent />
    );
  }
}

export default connect(null, { fetchRobots })(Card);
