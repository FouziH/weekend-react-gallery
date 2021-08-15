function GalleryItem({ item, updateCountLikes }) {

function AddLikes() {
{updateCountLikes(item.id)}
}

let updateLikes = "";
if(item.likes  <  1){
  updateLikes = "No people love this! 🙁"
}else{
  updateLikes = `${item.likes} people love this!`
}


  console.log("item is", item);
  return (
    <div>
      <img src={item.path} />
      <br />
      <button onClick={AddLikes}>I love this!</button>
      <p>{updateLikes}</p>
    </div>
  );
}

export default GalleryItem