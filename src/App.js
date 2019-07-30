import React from "react";
import "./App.css";

class App extends React.Component {
  state = {
    open: false // this is where you toggle, assigning views to true or false
  };

  toggleMenu = () => {
    this.setState({ open: !this.state.open }); // !this.state.open just changes whatever it is to the opposite.
  };

  render() {
    let dropdownClassnames = "dropdown"; // dropdown goes to div
    if (this.state.open) {
      dropdownClassnames += " dropdown--open";
    } // this is where you check if it's open. If it is open, you add dropdown--open to the dropdown Classnames

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
