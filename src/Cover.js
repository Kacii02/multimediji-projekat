import React from "react";
import "./styles/Cover.css";

const Cover = ({ collection }) => {
  return (
    <div className="cover">
      <img src={collection.imgSrc || "https://cdn.pixabay.com/photo/2016/09/22/10/44/banner-1686943_1280.jpg"} />
      <h1>{collection.title}</h1>
      <p>{collection.description}</p>
    </div>
  );
};

export default Cover;
