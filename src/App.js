import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchRobots } from './actions/action';
import Card from './components/Card/Card';
import SearchBox from './components/SearchBox/SearchBox';
import './App.css';


class App extends Component {
  componentDidMount() {
    this.props.fetchRobots();
  }

  onSearchChange = event => {
    this.setState({searchField: event.target.value})
    console.log(this.state);
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

export default connect(mapStateToProps, { fetchRobots })(App);
