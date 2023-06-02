import React, { useState, useEffect } from '../../../node_modules/react';
import MovieList from './MovieList.jsx';
import Search from './Search.jsx';
import WatchToggle from './WatchToggle.jsx';
import AddMovie from './AddMovie.jsx';

const exampleMovieData = [
  { title: 'Mean Girls', watched: false },
  { title: 'Hackers', watched: true },
  { title: 'The Grey', watched: false },
  { title: 'Sunshine', watched: true },
  { title: 'Ex Machina', watched: true }
];

const App = (props) => {

  const [searchEntry, setSearchEntry] = useState('');
  const [search, setSearch] = useState('');

  const [movieData, setMovieData] = useState(exampleMovieData);
  const [filteredMovies, setFilteredMovies] = useState(movieData);

  const [movieTitle, setMovieTitle] = useState('');

  const [watchedToggle, setWatchedToggle] = useState(false);

  useEffect(() => {
    var tempMovieList = movieData.filter((movie) => {
      return (movie.title.toLowerCase().includes(search.toLowerCase()) && movie.watched === watchedToggle);
    })

    if (tempMovieList.length === 0) {
      setFilteredMovies([ {title: 'No matching movie titles'}]);
    } else {
      setFilteredMovies(tempMovieList);
    }
  }, [search, movieData]);

  const handleSearchEntry = function(event) {
    setSearchEntry(event.target.value);
  }

  const submitSearch = function() {
    setSearch(searchEntry);
  };

  const handleMovieEntry = function(event) {
    setMovieTitle(event.target.value);
  }

  const addNewMovie = function() {
    if (movieTitle !== '') {
      var movObj = {
        title: movieTitle,
        watched: false
      };
      setMovieData([...movieData, movObj]);
    }
    setWatchedToggle(false);
  }

  const toggle = function() {
    var tempMovieList = movieData.filter((movie) => {
      return movie.watched === !watchedToggle;
    })

    if (tempMovieList.length === 0) {
      setFilteredMovies([ {title: 'No matching movie titles'}]);
    } else {
      setFilteredMovies(tempMovieList);
    }

    setWatchedToggle(!watchedToggle);
  }

  return (
    <>
      <header>
        <div className="container">
          <h2>MovieList</h2>
        </div>
      </header>
      <div className="container">
        <div className="row">
          <WatchToggle watchedToggle={watchedToggle} toggle={toggle} />
          <AddMovie movieTitle={movieTitle} handleChange={handleMovieEntry} handleSubmit={addNewMovie} />
          <Search searchEntry={searchEntry} handleChange={handleSearchEntry} handleSubmit={submitSearch} />
        </div>
        <div className="row">
          <MovieList movies={filteredMovies} />
        </div>
      </div>
    </>
  )
};

export default App;