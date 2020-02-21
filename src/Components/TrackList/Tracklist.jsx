import React from 'react';
import './Tracklist.css';
import Track from '../Track/Track';

export default function Tracklist({ tracks = [], onAdd, onRemove, isRemoval }) {
  return (
    <div className="TrackList">
      {tracks.map((track) => {
        return (
          <Track
            track={track}
            onAdd={onAdd}
            onRemove={onRemove}
            isRemoval={isRemoval}
          />
        );
      })}
    </div>
  );
}
