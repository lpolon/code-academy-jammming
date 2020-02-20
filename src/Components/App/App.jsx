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
      playlistName: 'hardcoded Name test',
      playlistTracks: [
        {
          name: 'toxicity',
          artistName: 'sistema fodão',
          albumName: 'toxicity',
        },
      ],
    };
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.search = this.search.bind(this);
  }

  async search(searchTerm) {
    const searchResults = await Spotify.search(searchTerm);
    this.setState({
      searchResults,
    });
  }

  updatePlaylistName(playlistName) {
    this.setState({
      playlistName,
    });
  }

  render() {
    return (
      <div>
        <h1>
          Ja
          <span className="highlight">mmm</span>
          ing
        </h1>
        <div className="App">
          <SearchBar onSearch={this.search} />
          <div className="App-playlist">
            <SearchResult searchResults={this.state.searchResults} />
            <Playlist
              playlistName={this.state.playlistName}
              playlistTracks={this.state.playlistTracks}
              onNameChange={this.updatePlaylistName}
            />
          </div>
        </div>
      </div>
    );
  }
}
