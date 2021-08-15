import GalleryItem from "../GalleryItem/GalleryItem"
function GalleryList({ galleryList}) {

  return (
    <>
      <ul>
        {galleryList.map((item) => {
          <GalleryItem item={item} />;
        })}
      </ul>
    </>
  );
}


export default GalleryList