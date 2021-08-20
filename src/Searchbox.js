import React from "react";
import "./App.css";

const Searchbox = ({ searchfield, searchChange }) => {
  return (
    <div className="searchSection">
      <input
        className="pa3 ba b--green bg-lightest-blue br4"
        type="search"
        placeholder="Search Anime Characters"
        onChange={searchChange}
      />
    </div>
  );
};

export default Searchbox;
