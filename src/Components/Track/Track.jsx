import React from 'react';
import './Track.css';

export default function Track({ name = '', artistName = '', albumName = '' }) {
  // const renderAction = () => {
  //   const { isRemoval } = props;
  //   return <button className="Track-action">{isRemoval ? '-' : '+'}</button>;
  // };

  return (
    <div className="track">
      <div className="Track-information">
        <h3>{name}</h3>
        <p>
          {artistName} | {albumName}
        </p>
      </div>
      {/* {renderAction()} */}
    </div>
  );
}
