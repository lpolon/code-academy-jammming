import React, { Component } from 'react';
import './SearchBar.css';

import { Spotify } from '../../util/Spotify';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: '',
    };
    this.search = this.search.bind(this);
    this.handleTermChange = this.handleTermChange.bind(this);
  }

  search() {
    Spotify.getAccessToken();
    this.props.onSearch(this.state.term);
  }

  handleTermChange(event) {
    const { value } = event.target;
    this.setState({
      term: value,
    });
  }

  render() {
    return (
      <div className="SearchBar">
        <input
          placeholder="Enter A Song, Album, or Artist"
          onChange={this.handleTermChange}
          value={this.state.term}
        />
        <button className="SearchButton" onClick={this.search}>
          SEARCH
        </button>
      </div>
    );
  }
}
