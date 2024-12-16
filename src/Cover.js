import React from "react";
import "./styles/Cover.css";

const Cover = ({ collection }) => {
  return (
    <div className="cover">
      <img src={collection.imgSrc || "https://png.pngtree.com/thumb_back/fh260/background/20210906/pngtree-technology-building-light-blue-banner-image_805810.jpg"} />
      <h1>{collection.title || "Moje kolekcije"} </h1>
      <p>{collection.description}</p>
    </div>
  );
};

export default Cover;
