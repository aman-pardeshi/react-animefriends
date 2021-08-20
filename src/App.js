import React, { Component } from "react";
import CardList from "./CardList";
import { robots } from "./robots";
import Searchbox from "./Searchbox";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: robots,
      searchfield: "",
    };
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const filterRobot = this.state.robots.filter((robots) =>
      robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
    );
    return (
      <div className="tc">
        <h1 className="f1">Anime Friends</h1>
        <Searchbox searchChange={this.onSearchChange} />
        <CardList robots={filterRobot} />
        <footer className="code footerSection"> &copy; Aman Pardeshi</footer>
      </div>
    );
  }
}

export default App;
