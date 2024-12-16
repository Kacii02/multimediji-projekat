import React from "react";
import "./styles/Images2.css";

const Images = ({images}) => {
  return (
    <div className="images">
      {
        images.map((image)=>(
          <img src={image} alt="slikaBg" />
        ))
      }
    </div>
  );
};

export default Images;
