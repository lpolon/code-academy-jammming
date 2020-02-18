import React from 'react';
import './SearchResult.css';
import TrackList from '../TrackList/Tracklist';

export default function SearchResult({ searchResults }) {
  return (
    <div className="SearchResults">
      <h2>Results</h2>
      <TrackList searchResults={searchResults} />
    </div>
  );
}
