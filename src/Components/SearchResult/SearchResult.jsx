import React from 'react';
import './SearchResult.css';
import TrackList from '../TrackList/Tracklist';

export default function SearchResult(props) {
  return (
    <div className="SearchResults">
      <h2>Results</h2>
      <TrackList />
    </div>
  );
}
