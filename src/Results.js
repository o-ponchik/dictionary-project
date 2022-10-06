import React from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";

export default function Results(props) {
  const PhoneticLetter = () => {
    if (props.results.phonetic) {
      return <p>{props.results.phonetic} </p>;
    } else {
      return <p>No phonetic was found 🙁</p>;
    }
  };

  if (props.results) {
    console.log(props.results.phonetics[0].audio);
    return (
      <div className="container">
        <div className="content">
          <div className="searching-word mb-5">
            <h2>{props.results.word}</h2>
            <div className="row mt-3">
              <div className="col-auto">
                <PhoneticLetter />
              </div>
              <div className="col-auto text-start">
                {props.results.phonetics.map(function (phonetic, index) {
                  return (
                    <span className="pe-3">
                      <Phonetics key={index} phonetic={phonetic} />
                    </span>
                  );
                })}
              </div>
            </div>
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
