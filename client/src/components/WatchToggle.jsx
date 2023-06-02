import React from 'react';

const WatchToggle = ({watchedToggle, toggle}) => {

  return (
    <div className="col">
      <div className="btn-group">
        <button className={watchedToggle ? "btn btn-primary" : "btn btn-secondary"} onClick={toggle}>Watched</button>
        <button className={watchedToggle ? "btn btn-secondary" : "btn btn-primary"} onClick={toggle}>To Watch</button>
      </div>
    </div>
  )
};

export default WatchToggle;