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
      <div className="PlayList">
        <input defaultValue={'New Playlist'} />
        <TrackList />
        <button cl assName="Playlist-save">
          SAVE TO SPOTIFY
        </button>
      </div>
    );
  }
}