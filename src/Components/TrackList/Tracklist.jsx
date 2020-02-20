import React from 'react';
import './Tracklist.css';

import Track from '../Track/Track';

export default function Tracklist({ tracks = [] }) {
  return (
    <div className="TrackList">
      {tracks.map((trackInfo) => {
        const { id, ...rest } = trackInfo;
        return <Track key={id} {...rest} />;
      })}
    </div>
  );
}
