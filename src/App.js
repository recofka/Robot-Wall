import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import './App.css';
import Card from './components/Card/Card';
import SearchBox from './components/SearchBox/SearchBox';


export default class App extends Component {
  constructor() {
    super();
    this.state = {
      searchField: '',
    };
  }

 
  onSearchChange = event => {
    this.setState({searchField: event.target.value})
    console.log('statee',this.state);
  }

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header>
            <h1>Robots</h1>
          </header>
          <main>
            <SearchBox searchChange={this.onSearchChange} />
            <Card />
          </main>
        </div>
      </Provider>
    );
  }
}
