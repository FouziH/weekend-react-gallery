import React from "react";
import GalleryItem from "../GalleryItem/GalleryItem"
function GalleryList({ galleryList}) {

  return (
    <div className="galleryItems">
      {galleryList.map((item) => (
        <GalleryItem key={item.id} item={item}/>
      ))}
    </div>
  );
}


export default GalleryList