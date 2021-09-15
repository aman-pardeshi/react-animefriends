import React, { Component } from "react";
import { connect } from "react-redux";
import CardList from "../components/CardList";
import Searchbox from "../components/Searchbox";
import "./App.css";
import Scroll from "../components/Scroll";
import { requestRobots, setSearchField } from "../action";

const mapStateToProps = (state) => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots()),
  };
};

class App extends Component {
  componentDidMount() {
    this.props.onRequestRobots();
  }

  // onSearchChange = (event) => {
  //   this.setState({ searchfield: event.target.value });
  // };

  render() {
    const { searchField, onSearchChange, robots, isPending } = this.props;
    const filterRobot = robots.filter((robot) =>
      robot.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return isPending ? (
      <h1 className="tc f1-l fw1">Loading...</h1>
    ) : (
      <div className="tc">
        <h1 className="f1">Anime Bots</h1>
        <Searchbox searchChange={onSearchChange} />
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
