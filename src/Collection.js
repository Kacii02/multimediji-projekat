import React, { useState } from "react";
import "./styles/Collection.css";

const Collection = ({setCollection, inCollection}) => {

  // let [imgSrc,setImgSrc] = useState("https://storage.googleapis.com/world-travel-guide/2024/08/Belgrade-Travel-Guide-Travel-S-Helper.jpg");
  // let [title,setTitle] = useState("Hram Sv. Save");
  // let [description, setDescription] = useState("Ovo je neki random opis za ovu random sliku i random kolekciju");

  const handleCover = ()=> {
    let collection = {
      imgSrc:inCollection.coverImage,
      title:inCollection.title,
      description:inCollection.description
    }
    setCollection(collection);

    window.scrollTo({
      top: 0,
      behavior: "smooth", // Dodaje animirani prelaz
    });
  }

  return (
    <div className="collection">
      <img
        src={inCollection.coverImage}
        alt="Cover photo"
      />
      <div className="overlay">
        <h3>{inCollection.title}</h3>
        <p>
          {inCollection.description}
        </p>
        <button onClick={handleCover}>Otvori</button>
      </div>
    </div>
  );
};

export default Collection;
