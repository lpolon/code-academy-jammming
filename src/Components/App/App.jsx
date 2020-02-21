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
      playlistTracks: [],
    };
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.search = this.search.bind(this);
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
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

  addTrack(track) {
    const { id } = track;
    const isTrackIncluded = (id) =>
      typeof this.state.playlistTracks.find((track) => track.id === id) !==
      'undefined'
        ? true
        : false;
    if (isTrackIncluded(id)) return;
    this.setState({
      playlistTracks: [...this.state.playlistTracks, track],
    });
  }

  removeTrack(track) {
    const { id } = track;
    const foundTrackIndex = this.state.playlistTracks.findIndex(
      (track) => track.id === id
    );
    if (foundTrackIndex === -1) return;

    const playlistCopy = [...this.state.playlistTracks];
    playlistCopy.splice(foundTrackIndex, 1);
    this.setState({
      playlistTracks: playlistCopy,
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
            <SearchResult
              onAdd={this.addTrack}
              searchResults={this.state.searchResults}
            />
            <Playlist
              onRemove={this.removeTrack}
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
