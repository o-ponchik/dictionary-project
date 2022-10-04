import React from "react";
import Meaning from "./Meaning";

export default function Results(props) {
  console.log(props.results);

  if (props.results) {
    return (
      <div className="container">
        <div className="content">
          <div className="searching-word text-center">
            <h2>{props.results.word}</h2>
            <p>{props.results.phonetic}</p>
          </div>

          {/* meaning */}
          <div className="meaning mb-5">
            {props.results.meanings.map(function (meaning, index) {
              return (
                <div key={index}>
                  <Meaning meaning={meaning} index={index} />
                </div>
              );
            })}
          </div>

          {/* image */}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
