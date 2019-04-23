import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardComponent from './CardComponent';
import { fetchRobots } from '../../actions/action';

class Card extends Component {
  componentDidMount() {
    this.props.fetchRobots();
  }

  render() {
    return (
      <CardComponent robotsData={this.props.robots} />
    );
  }
}

const mapStateToProps = state => (
  {
    robots: state.robots,
  });

export default connect(mapStateToProps, { fetchRobots })(Card);
