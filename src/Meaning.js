import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>
        <span>0{props.index + 1}.</span> {props.meaning.partOfSpeech}
      </h3>
      <hr></hr>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p className="my-4">
              <b>{index + 1}.</b> {definition.definition}
            </p>
            <p className="fw-light fst-italic">{definition.example}</p>
            <Synonyms synonyms={definition.synonyms} />
          </div>
        );
      })}
    </div>
  );
}
