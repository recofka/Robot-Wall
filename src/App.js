/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { fetchRobots, robotSearch } from './actions/action';
import Nav from './components/Nav/Nav';
import Card from './components/Card/Card';
import SearchBox from './components/SearchBox/SearchBox';
import DetailRobot from './components/DetailRobot/Detail';
import './App.css';
import Footer from './components/Footer/Footer';


class App extends Component {
  componentDidMount() {
    this.props.fetchRobots();
  }

  onSearchChange = (event) => {
    this.props.robotSearch(event.target.value);
  }

  render() {
    const { robots, filteredRobots } = this.props;
    const showFilteredRobots = robots.filter(
      robot => robot.name.toLowerCase().includes(filteredRobots.toLowerCase()),
    );
    return (

      <div className="App">
        <Nav />
        <SearchBox searchChange={this.onSearchChange} />
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={() => <Card robot={showFilteredRobots} />} />
            <Route path="/:id" component={DetailRobot} />
          </Switch>
        </BrowserRouter>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => (
  {
    robots: state.robots,
    filteredRobots: state.filteredRobots.searchField,
  });

export default connect(mapStateToProps, { fetchRobots, robotSearch })(App);
