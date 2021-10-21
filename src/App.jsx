import React from 'react';
import './App.css';
import beers from './../src/assets/beers.png';
import newBeer from './../src/assets/new-beer.png';
import randomBeer from './../src/assets/random-beer.png';
import { BrowserRouter, Route, Switch, Link, Redirect } from 'react-router-dom';

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <div>
          <img src={beers} alt="beers" />
          <h3>
            <Link to="/all-beer">All Beer</Link>
          </h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias
            aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis
            suscipit eaque?
          </p>
        </div>
        <div>
          <img src={randomBeer} alt="random beer" />
          <h3>
            <Link to="/random-beer">Random Beer</Link>
          </h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias
            aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis
            suscipit eaque?
          </p>
        </div>
        <div>
          <img src={newBeer} alt="new beer" />
          <h3>
            <Link to="/new-beer">New Beer</Link>
          </h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias
            aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis
            suscipit eaque?
          </p>
        </div>
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div style={{ backgroundColor: 'cyan', height: 30 }}>
        <h3>Home</h3>
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <h1>Ironbeers</h1>
      <Header />
      <HomePage />
    </div>
  );
}

export default App;
