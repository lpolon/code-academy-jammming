import React from 'react';
import './Track.css';

export default function Track(props) {
  const renderAction = () => {
    const {isRemoval} = props

    return (
      <button className="Track-action">
        {isRemoval ? '-' : '+'}
      </button>
    )
  }

  return (
    <div className="track">
      <div className="Track-information">
        <h3>track name example</h3>
        <p>track artist example | track album example</p>
      </div>
      {renderAction()}
    </div>
  );
}
