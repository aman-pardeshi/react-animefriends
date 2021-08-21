import React, { Component } from "react";
import CardList from "../components/CardList";
import Searchbox from "../components/Searchbox";
import "./App.css";
import Scroll from "../components/Scroll";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: "",
    };
    console.log("constructor");
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ robots: users }));
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const { robots, searchfield } = this.state;
    console.log("render");
    const filterRobot = robots.filter((robot) =>
      robot.name.toLowerCase().includes(searchfield.toLowerCase())
    );
    return !robots.length ? (
      <h1 className="tc f1-l fw1">Loading...</h1>
    ) : (
      <div className="tc">
        <h1 className="f1">Anime Bots</h1>
        <Searchbox searchChange={this.onSearchChange} />
        <Scroll>
          <CardList robots={filterRobot} />
        </Scroll>
        <footer className="pv4 ph3 ph5-m ph6-l mid-gray">
          &copy; Aman Pardeshi
        </footer>
      </div>
    );
  }
}

export default App;
