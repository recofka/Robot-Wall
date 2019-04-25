import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchRobots, robotSearch } from './actions/action';
import Card from './components/Card/Card';
import SearchBox from './components/SearchBox/SearchBox';
import './App.css';


class App extends Component {
  componentDidMount() {
    this.props.fetchRobots();
  }

  onSearchChange = event => {
    const e = event.target.value
    console.log(this.props);
    this.props.robotSearch(e)
  }

  render() {
    return (
        <div className="App">
          <header>
            <h1>Robots</h1>
          </header>
          <main>
            <SearchBox searchChange={this.onSearchChange} />
            <Card robot={this.props.robots} />
          </main>
        </div>
    );
  }
}

const mapStateToProps = state => (
  {
    robots: state.robots,
  });

export default connect(mapStateToProps, { fetchRobots, robotSearch })(App);
