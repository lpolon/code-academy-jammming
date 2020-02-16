import React, { Component } from 'react';
import './SearchBar.css';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="SearchBar">
        <input placeholder="Enter A Song, Album, or Artist" />
        <button className="SearchButton">SEARCH</button>
      </div>
    );
  }
}
