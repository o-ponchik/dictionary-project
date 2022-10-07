import React, { useState } from "react";
import Results from "./Results";
import Photos from "./Photos";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState(``);
  let [results, setResults] = useState(null);
  let [photos, setPhotos] = useState(null);

  function handleDictionaryResponse(response) {
    setResults(response.data[0]);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function search(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    const pexelsApiKey = `563492ad6f91700001000001f7f580faa8a14451b0f53ea5ddd1c682`;
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios
      .get(pexelsApiUrl, {
        headers: headers,
      })
      .then(handlePexelsResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <header className="Dictionary-header">
        <h1>MyDictionary</h1>

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
              placeholder="What word do you want to look up?"
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
        <p>e.g. sunset, pretty, reference...</p>
      </header>

      <Results results={results} />
      <Photos photos={photos} />
    </div>
  );
}

// 563492ad6f91700001000001f7f580faa8a14451b0f53ea5ddd1c682 Api Key for Images
