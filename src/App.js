import "./styles/App.css"
import Collections from "./Collections";
import Cover from "./Cover";
import Images from "./Images";
import { useState } from "react";
import collectionsDB from "./database/collections.json"


function App() {

  let [collection, setCollection] = useState({});

  const findByTitle = (collections, title) => {
    return collections.find((collection) => collection.title === title);
  };

  let imageGroup = findByTitle(collectionsDB, collection.title) || { images: [] };
  console.log(imageGroup);

  let images = imageGroup.images;

  return <div className="App">
    <Cover collection={collection}/>
    <Images images={images}/>
    <Collections setCollection={setCollection}/>
  </div>;
}

export default App;
