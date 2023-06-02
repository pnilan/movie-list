import React from 'react';

const Search = ({searchEntry, handleChange, handleSubmit}) => {
  return (
    <div className="col-auto">
      <form onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}>
        <input type="text" placeholder="Find a movie..." value={searchEntry} onChange={handleChange}/>
        <button type="submit" className="btn btn-secondary">Search</button>
      </form>
    </div>
  )

};

export default Search;
