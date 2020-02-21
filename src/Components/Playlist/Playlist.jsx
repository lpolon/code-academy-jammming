import React, { Component } from 'react';
import './Playlist.css';

import TrackList from '../TrackList/Tracklist';

export default function Playlist({
  onSave,
  onRemove,
  playlistTracks,
  onNameChange,
}) {
  return (
    <div className="Playlist">
      <input
        onChange={({ target: { value } }) => {
          onNameChange(value);
        }}
        placeholder="New Playlist"
      />
      <TrackList tracks={playlistTracks} onRemove={onRemove} isRemoval />
      <button onClick={onSave} className="Playlist-save">
        SAVE TO SPOTIFY
      </button>
    </div>
  );
}
