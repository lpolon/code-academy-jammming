import React, { Component } from 'react';
import './App.css';

import SearchBar from '../SearchBar/SearchBar';
import SearchResult from '../SearchResult/SearchResult';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>
          Ja
          <span className="highlight">mmm</span>
          ing
        </h1>
        <div className="App">
          <div className="App-playlist">
            <SearchBar />
            <SearchResult />
            {/* Playlist */}
          </div>
        </div>
      </div>
    );
  }
}
