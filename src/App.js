import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    open: false
  };

  toggleMenu = () => {
    this.setState({ open: !this.state.open });
  };

  render() {
    let dropdownClassnames = 'dropdown';
    if (this.state.open) {
      dropdownClassnames += ' dropdown--open';
    }

    return (
      <div className="App">
        <nav className="navbar">
          <div className="navbar__title">StartBootstrap</div>
          <button className="navbar__menu" onClick={this.toggleMenu}>
            Menu
          </button>
        </nav>
        <div className={dropdownClassnames}>
          <ul className="dropdown__list">
            <li className="dropdown__item">Services</li>
            <li className="dropdown__item">Portfolio</li>
            <li className="dropdown__item">About</li>
            <li className="dropdown__item">Team</li>
            <li className="dropdown__item">Contact</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
