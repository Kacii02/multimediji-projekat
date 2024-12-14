import React from "react";
import "./styles/Collection.css";

const Collection = () => {
  return (
    <div className="collection">
      <img
        src="https://storage.googleapis.com/world-travel-guide/2024/08/Belgrade-Travel-Guide-Travel-S-Helper.jpg"
        alt="Cover photo"
      />
      <div className="overlay">
        <h3>Hram Sv. Save</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi
          debitis quae laudantium, quia asperiores accusantium?
        </p>
        <button>Otvori</button>
      </div>
    </div>
  );
};

export default Collection;
