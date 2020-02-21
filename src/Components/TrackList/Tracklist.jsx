import React from 'react';
import './Tracklist.css';
import Track from '../Track/Track';

export default function Tracklist({ tracks = [], onAdd, isRemoval }) {
  return (
    <div className="TrackList">
      {tracks.map(({ id, ...rest }) => {
        return (
          <Track key={id} track={rest} onAdd={onAdd} isRemoval={isRemoval} />
        );
      })}
    </div>
  );
}
