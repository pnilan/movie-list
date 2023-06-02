import React from 'react';

const MovieEntry = ({movie}) => {
  return (
    <div className="row">
      <div className="col movie-entry">
        {movie.title}
      </div>
    </div>
  )
}

export default MovieEntry;