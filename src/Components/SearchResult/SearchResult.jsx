import React from 'react';
import './SearchResult.css';
import TrackList from '../TrackList/Tracklist';

export default function SearchResult({ searchResults: tracks, onAdd }) {
  return (
    <div className="SearchResults">
      <h2>Results</h2>
      <TrackList tracks={tracks} onAdd={onAdd} isRemoval={false} />
    </div>
  );
}
