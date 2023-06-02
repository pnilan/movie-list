import React, {useState} from 'react';

const AddMovie = ({movieTitle, handleSubmit, handleChange}) => {
  // const [movieTitle, setMovieTitle] = useState('');

  return (
    <div className="col">
    <form onSubmit={(event) => {
      event.preventDefault();
      handleSubmit();
    }}>
      <input type="text" placeholder="Add a movie..." value={movieTitle} onChange={handleChange} />
      <button type="submit" className="btn btn-success">Add</button>
    </form>
  </div>
  )
};

export default AddMovie;