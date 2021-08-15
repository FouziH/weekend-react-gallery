function GalleryItem({ item, updateCountLikes }) {

function AddLikes() {
{updateCountLikes(item.id)}
}

  console.log("item is", item);
  return (
    <div>
      <img src={item.path} />
      <br />
      <button onClick={AddLikes}>I love this!</button>
      <p>{item.likes} people love this!</p>
    </div>
  );
}

export default GalleryItem