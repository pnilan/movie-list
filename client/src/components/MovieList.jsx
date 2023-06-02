import React from 'react';
import MovieEntry from './MovieEntry.jsx';

const MovieList = ({movies}) => {
  return (
    <div className="col">
      {movies.map((movie, i) => <MovieEntry key={i} movie={movie}/>)}
    </div>
  )
};

export default MovieList;