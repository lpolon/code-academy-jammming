import React from 'react';
import './Tracklist.css';

import Track from '../Track/Track';

export default function Tracklist({ searchResults = [] }) {
  return (
    <div className="TrackList">
      {searchResults.map((trackInfo) => {
        const { id, ...rest } = trackInfo;
        return <Track key={id} {...rest} />;
      })}
    </div>
  );
}