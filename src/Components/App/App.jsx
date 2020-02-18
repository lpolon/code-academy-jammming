import React, { Component } from 'react';
import './App.css';

import SearchBar from '../SearchBar/SearchBar';
import SearchResult from '../SearchResult/SearchResult';
import Playlist from '../Playlist/Playlist';

import { Spotify } from '../../util/Spotify';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [],
    };
    this.search = this.search.bind(this);
  }

  componentDidMount() {
    this.search('red');
  }

  async search(searchTerm) {
    const searchResults = await Spotify.search(searchTerm);
    this.setState({
      searchResults,
    });
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <h1>
          Ja
          <span className="highlight">mmm</span>
          ing
        </h1>
        <div className="App">
          <div className="App-playlist">
            <SearchBar onSearch={this.search} />
            <SearchResult searchResults={this.state.searchResults} />
            <Playlist />
          </div>
        </div>
      </div>
    );
  }
}
