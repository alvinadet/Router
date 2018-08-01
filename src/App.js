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

  toHome = () => {
    this.setState({
      page: 'home'
    });
  };

  toAbout = () => {
    this.setState({
      page: 'about'
    });
  };

  toContact = () => {
    this.setState({
      page: 'contact'
    });
  };

  render() {
    return (
      <div>
        {this.state.page == 'home' && <HomeContainer />}
        {this.state.page == 'about' && <AboutContainer />}
        {this.state.page == 'contact' && <ContactContainer />}

        <button onClick={this.toHome}>Home</button>
        <button onClick={this.toAbout}>About</button>
        <button onClick={this.toContact}>Contact</button>
      </div>
    );
  }
}

export default App;
