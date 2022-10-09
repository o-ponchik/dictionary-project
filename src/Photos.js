import React from "react";
import "./Photos.css";

export default function Photos(props) {
  //   console.log(props.photos);

  if (props.photos) {
    return (
      <div className="Photos">
        <hr></hr>
        <div className="row">
          {props.photos.map(function (photo, index) {
            console.log(photo.src.tiny);
            return (
              <div className="col-sm col-md-4 mb-3" key={index}>
                <img
                  className="img-fluid rounded"
                  src={photo.src.tiny}
                  alt={photo.alt}
                ></img>
              </div>
            );
          })}
        </div>
        <hr></hr>
      </div>
    );
  } else {
    return null;
  }
}
