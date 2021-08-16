import React from 'react';
//importing useEffect and useState from react 
import { useEffect, useState} from 'react';
import './App.css';
//importing my Header 
import Header from '../Header/Header'
//importing my GalleryList 
import GalleryList from '../GalleryList/GalleryList';
//importing axios to make request to the server
import axios from 'axios';

function App() {
  //Declaring my galleryList & setGalleryList state
  let [galleryList, setGalleryList] = useState([]);
  //Om page load this function would run and passing empty array as a second argument 
    useEffect(() => {
    //calling FetGallery function 
      FetchGallery();
  },[]);

  const FetchGallery = () => {
    //Beginning of axios.get request 
    axios.get('/gallery').then((response) => {
      console.log('GET /gallery response is', response.data)
      setGalleryList(response.data); //using my setGalleryList state and passing response.data from the server
    }).catch ((error) => { //catch any error 
      console.log('GET /gallery error is:', error); //log error
    })//end of axios.get request to the server 
  }//end of FetchGallery function

  //this function will allow the user to pass id ad as a parameter and make put request to the server
  const updateCountLikes = (id) => {
    //beginning of axios put request to the server
    //& passing id
    axios
      .put(`/gallery/like/${id}`)
      .then((response) => {
        console.log("PUT /gallery/likes/:${id} is", response);//login the response 
        FetchGallery(); //calling my FetchGallery function 
      })
      .catch((error) => {//catching errors from the server
        console.log("/gallery/likes/:${id} error is", error);//login the error from the server to the console.
      });
  }
    return (
      <div className="App">
        {/* Calling my Header function */}
      <Header />
        <p>Gallery goes here</p>
        {/* Passing my GalleryList and passing 2 props to it */}
        <GalleryList  galleryList={galleryList}
        updateCountLikes ={updateCountLikes}
        />
      </div>
    );
}

export default App;
