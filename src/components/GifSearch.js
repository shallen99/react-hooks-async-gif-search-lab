import React, { useState } from "react";

function GifSearch({ submit }) {
  const [querySearch, setQuerySearch] = useState("");


  function handleSearch(e) {
    setQuerySearch(e.target.value);
  }
  
  function handleQuery(e) {
    e.preventDefault();
    submit(querySearch);
  }

  

  return (
    <div className="row height d-flex justify-content-center align-items-center">
      <form onSubmit={handleQuery} className="col-md-8">
        <div className="form-group search">
          <label htmlFor="search">Enter a Search Term:</label>
          <input
            id="search"
            className="form-control"
            type="text"
            value={querySearch}
            onChange={handleSearch}
          />
        </div>
        <button type="submit" className="btn btn-success">
          Find Gifs
        </button>
      </form>
    </div>
  );
}

export default GifSearch;