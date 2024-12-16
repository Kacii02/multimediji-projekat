// import React from "react";
// import "./styles/Images2.css";

// const Images = ({images}) => {
  
//   return (
//     <div className="images">
//       {
//         images.map((image)=>(
//           <img src={image} alt="slikaBg" />
//         ))
//       }
//     </div>
//   );
// };

// export default Images;

import React, { useState } from "react";
import "./styles/Images2.css";

const Images = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(null); // Čuva trenutno izabranu sliku

  const handleImageClick = (image) => {
    setSelectedImage(image); // Postavlja izabranu sliku
  };

  const closeModal = () => {
    setSelectedImage(null); // Vraća na osnovni prikaz
  };

  return (
    <div>
      <div className="images">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt="slikaBg"
            onClick={() => handleImageClick(image)} // Klik na sliku otvara modal
          />
        ))}
      </div>

      {selectedImage && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage} alt="selected" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Images;
