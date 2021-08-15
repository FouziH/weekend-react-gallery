import React from "react";
import GalleryItem from "../GalleryItem/GalleryItem"
function GalleryList({ galleryList, updateCountLikes }) {
  return (
    <div className="galleryItems">
      {galleryList.map((item) => (
        <GalleryItem key={item.id} item={item}
       updateCountLikes ={updateCountLikes} />
      ))}
    </div>
  );
}


export default GalleryList