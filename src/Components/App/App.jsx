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
      playlistName: 'New Playlist',
      playlistTracks: [],
    };
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.search = this.search.bind(this);
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
  }

  async search(searchTerm) {
    const searchResults = await Spotify.search(searchTerm);
    this.setState({
      searchResults,
    });
  }

  updatePlaylistName(playlistName) {
    console.log('recebendo valor do event?', playlistName);
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

  savePlaylist() {
    const trackURIs = this.state.playlistTracks.map((track) => track.uri); // "spotify:track:78kar2tZk7655xZMibzXO3"
    Spotify.savePlaylist(this.state.playlistName, trackURIs);
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
              onSave={this.savePlaylist}
              onRemove={this.removeTrack}
              playlistTracks={this.state.playlistTracks}
              onNameChange={this.updatePlaylistName}
            />
          </div>
        </div>
      </div>
    );
  }
}
