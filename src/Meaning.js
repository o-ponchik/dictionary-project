import React from "react";

export default function Meaning(props) {
  console.log(props.meaning);
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
          </div>
        );
      })}
    </div>
  );
}
