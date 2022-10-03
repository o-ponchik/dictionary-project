import React, { useState } from "react";

export default function Dictionary() {
  let [keyword, setKeyword] = useState(``);

  function search(event) {
    event.preventDefault();
    alert(`Searching for ${keyword}`);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form className="row" onSubmit={search}>
        <div className="col-3"></div>
        <div className="col-5">
          <label for="inputWord" className="visually-hidden">
            Search a new word
          </label>
          <input
            type="search"
            className="form-control"
            id="inputWord"
            placeholder="Type a new word..."
            autoFocus
            onChange={handleKeywordChange}
          />
        </div>
        <div className="col-2">
          <button type="submit" className="btn btn-outline-light">
            Search
          </button>
        </div>
        <div className="col-2"></div>
      </form>
    </div>
  );
}
