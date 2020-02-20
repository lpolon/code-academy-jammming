import React, { Component } from 'react';
import './Playlist.css';

import TrackList from '../TrackList/Tracklist';

export default class Playlist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playListName: '',
    };
    this.handleNameChange = this.handleNameChange.bind(this);
  }

  handleNameChange(event) {
    const { value: playListName } = event.target;
    this.setState({
      playListName,
    });
  }

  render() {
    return (
      <div className="Playlist">
        <input
          onChange={this.handleNameChange}
          defaultValue={
            this.state.playListName ? this.state.playListName : 'New Playlist'
          }
        />
        <TrackList tracks={this.props.playlistTracks}/>
        <button className="Playlist-save">SAVE TO SPOTIFY</button>
      </div>
    );
  }
}
