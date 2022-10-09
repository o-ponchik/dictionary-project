import React, { useState } from "react";
import Results from "./Results";
import Photos from "./Photos";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState(``);
  let [results, setResults] = useState(null);
  let [photos, setPhotos] = useState(null);
  let [load, setLoad] = useState(false);

  function handleDictionaryResponse(response) {
    setResults(response.data[0]);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function search(event) {
    event.preventDefault();
    setLoad(true);

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    const pexelsApiKey = `563492ad6f91700001000001f7f580faa8a14451b0f53ea5ddd1c682`;
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;
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

  if (!load) {
    return (
      <div className="Dictionary">
        <header className="Dictionary-header">
          <h1>MyDictionary</h1>

          <form className="row" onSubmit={search}>
            <div className="col-xsm-10 col-sm-5 offset-sm-3">
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
              <button
                type="submit"
                className="btn btn-outline-light d-none d-sm-block"
              >
                Search
              </button>
            </div>
          </form>
          <div className="row mt-3">
            <p className="col-xsm-10 col-sm-5 offset-sm-3">
              e.g. sunset, pretty, reference...
            </p>
          </div>
        </header>
        <div className="d-flex justify-content-center">
          <img
            className="img-fluid w-25 m-2 m-md-5 p-md-5"
            src={
              process.env.PUBLIC_URL +
              "images/undraw_file_searching_re_3evy.svg"
            }
            alt="Searching"
          ></img>
        </div>
      </div>
    );
  } else {
    return (
      <div className="Dictionary">
        <header className="Dictionary-header">
          <h1>MyDictionary</h1>

          <form className="row" onSubmit={search}>
            <div className="col-xsm-10 col-sm-5 offset-sm-3">
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
              <button
                type="submit"
                className="btn btn-outline-light d-none d-sm-block"
              >
                Search
              </button>
            </div>
          </form>
          <div className="row mt-3">
            <p className="col-xsm-10 col-sm-5 offset-sm-3">
              e.g. sunset, pretty, reference...
            </p>
          </div>
        </header>

        <Results results={results} />
        <Photos photos={photos} />
      </div>
    );
  }
}

// 563492ad6f91700001000001f7f580faa8a14451b0f53ea5ddd1c682 Api Key for Images
