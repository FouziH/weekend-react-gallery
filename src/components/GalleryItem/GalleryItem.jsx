function GalleryItem ({item}) {
    console.log("item is", item)
    return (
      <li>
        <img src= {item.path}  key={item.id}/>
      </li>
    );
}

export default GalleryItem