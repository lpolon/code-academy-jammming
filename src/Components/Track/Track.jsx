import React from 'react';
import './Track.css';

export default function Track(props) {
  return (
    <div className="track">
      <div className="Track-information">
        <h3>track name example</h3>
        <p>track artist | track album</p>
      </div>
      <button className="Track-action"> + </button>
    </div>
  );
}
