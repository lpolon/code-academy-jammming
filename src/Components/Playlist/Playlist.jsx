import React, { Component } from 'react';
import './Playlist.css';

import TrackList from '../TrackList/Tracklist';

export default class Playlist extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="Playlist">
        <input defaultValue={'New Playlist'} />
        <TrackList />
        <button className="Playlist-save">
          SAVE TO SPOTIFY
        </button>
      </div>
    );
  }
}
