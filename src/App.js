import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import './App.css';
import Card from './components/Card/Card';

const App = () => (
  <Provider store={store}>
    <div className="App">
      <main>
        <Card />
      </main>
    </div>
  </Provider>
);

export default App;
