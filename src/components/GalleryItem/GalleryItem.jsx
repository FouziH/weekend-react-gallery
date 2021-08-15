import { useState } from "react";

function GalleryItem({ item, updateCountLikes }) {
  let [toggle, setToggle] = useState(true)
  
  const toggler =() => {
  setToggle(!toggle)
  }

  const AddLikes = () => {
  {updateCountLikes(item.id)}
  }

let updateLikes = "";
if(item.likes  <  1){
  updateLikes = "No people love this! 🙁"
}else{
  updateLikes = `${item.likes} people love this!`
}

  console.log("item is", item);
 
    if (toggle === false) {
      return (
        <div>
          <div className="description" onClick={toggler}>{item.description}</div>
          <br />
          <button onClick={AddLikes}>I love this!</button>
          <p>{updateLikes}</p>
        </div>
      );
    }

    return (
      <div>
        <img onClick={toggler} src={item.path} />
        <br />
        <button onClick={AddLikes}>I love this!</button>
        <p>{updateLikes}</p>
      </div>
    );
  }
export default GalleryItem