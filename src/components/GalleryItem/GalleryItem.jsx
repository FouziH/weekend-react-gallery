function GalleryItem ({item}) {
    console.log("item is", item)
    return (
      <div>
        <img src={item.path} />
      </div>
    );
}

export default GalleryItem