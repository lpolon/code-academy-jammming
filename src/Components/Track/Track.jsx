import React from 'react';
import './Track.css';

export default function Track({ track, onAdd, onRemove, isRemoval }) {
  return (
    <div className="Track" key={track.id}>
      <div className="Track-information">
        <h3>{track.name}</h3>
        <p>
          {track.artistName} | {track.albumName}
        </p>
      </div>
      {isRemoval ? (
        <button onClick={() => onRemove(track)} className="Track-action">
          -
        </button>
      ) : (
        <button onClick={() => onAdd(track)} className="Track-action">
          +
        </button>
      )}
    </div>
  );
}
