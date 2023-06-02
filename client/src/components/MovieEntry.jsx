import React, {useState} from 'react';

const MovieEntry = ({movie}) => {

  let [active, setActive] = useState(false);

  const handleActiveClick = function() {
    setActive(!active);
  }

  return (
    <>
      <div className="row">
        <div className="col movie-entry" onClick={handleActiveClick}>
          <span>{movie.title}</span>
        </div>
      </div>
    {active ? (
      <div className="row">
        <div className="col movie-details">
            <p>Year: {movie.year}</p>
            <p>Runtime: {movie.runtime}</p>
            <p>Director: {movie.director}</p>
            <p>Watched: {movie.watched ? (
              <input type="checkbox" checked />
            ) : (
              <input type="checkbox" />
            )}</p>
        </div>
      </div>
    ) : (
      <></>
    )}
    </>
  )
}

export default MovieEntry;