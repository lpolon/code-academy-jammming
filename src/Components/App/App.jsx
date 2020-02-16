import React, { Component } from 'react';
import './App.css';

import SearchBar from '../SearchBar/SearchBar';
import SearchResult from '../SearchResult/SearchResult';

import { Spotify } from '../../util/Spotify';

export default class App extends Component {
  render() {
    // teste
    // Spotify.getAccessToken()
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
