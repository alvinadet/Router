import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AboutContainer from './containers/AboutContainer';
import HomeContainer from './containers/HomeContainer';
import ContactContainer from './containers/ContactContainer';

class App extends Component {
  state = {
    page: 'home'
  };

  handleClick = param => {
    this.setState({
      page: param
    });
  };

  render() {
    return (
      <div>
        {this.state.page == 'home' && <HomeContainer />}
        {this.state.page == 'about' && <AboutContainer />}
        {this.state.page == 'contact' && <ContactContainer />}

        <button
          onClick={() => {
            this.handleClick('home');
          }}>
          Home
        </button>
        <button
          onClick={() => {
            this.handleClick('about');
          }}>
          About
        </button>
        <button
          onClick={() => {
            this.handleClick('contact');
          }}>
          Contact
        </button>
      </div>
    );
  }
}

export default App;
