import { useState } from "react";
//GallryItem function and passing props.item and props.updateCountLikes
function GalleryItem({ item, updateCountLikes }) {
  //declaring a useState 
  let [toggle, setToggle] = useState(true)
  
  //This function is responsible for changing my useState from true to false on clicke
  const toggler =() => {
    //Setting the toggle true initial state to false 
  setToggle(!toggle)
  }

  //function is responsible on click to updateCount like by passing the item.id
  const AddLikes = () => {
  {updateCountLikes(item.id)}
  }

  //using conditional rendering 
let updateLikes = "";
if(item.likes  <  1){
  updateLikes = "No people love this! 🙁"; // if item.like < 1 this code will render 
}else{
  updateLikes = `${item.likes} people love this!`; //if item.likes >0 this code will render
}
 
//using if statement to toggle.
    if (toggle === false) {
      //if toggle is false, we will return the below code
      return (
        <div>
          <div className="description" onClick={toggler}>{item.description}</div>
          <br />
          <button onClick={AddLikes}>I love this!</button>
          <p>{updateLikes}</p>
        </div>
      );
    }
//else we will return the following with item.path
    return (
      <div>
        <img onClick={toggler} src={item.path} />
        <br />
        <button onClick={AddLikes}>I love this!</button>
        <p>{updateLikes}</p>
      </div>
    );
  }
export default GalleryItem; //exporting GalleryItem 