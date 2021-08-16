import React from "react";
//importing GalleryItem 
import GalleryItem from "../GalleryItem/GalleryItem"
//declared GalleryList function and passing, galleryList, and updateCountLikes
function GalleryList({ galleryList, updateCountLikes }) {
  //returning 
  return (
    <div className="galleryItems">
    {/* Mapping through galleryList */}
      {galleryList.map((item) => (
        //calling my GalleryItem function and passing props
        <GalleryItem key={item.id} item={item}
       updateCountLikes ={updateCountLikes} />
      ))}
    </div>
  );
}


export default GalleryList; //exporting my GalleryList function 