import React from "react";
import "./styles/Cover.css";

const Cover = ({ collection }) => {
  return (
    <div className="cover">
      <img src={collection.imgSrc} alt="Cover photo" />
      <h1>{collection.title}</h1>
      <p>{collection.description}</p>
    </div>
  );
};

export default Cover;
