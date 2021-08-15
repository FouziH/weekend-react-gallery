import React from 'react';
import { useEffect, useState} from 'react';
import './App.css';
import Header from '../Header/Header'
import GalleryList from '../GalleryList/GalleryList';
import axios from 'axios';

function App() {

let [galleryList, setGalleryList] = useState([]);
   
  //Om page load this function would run 
  useEffect(() => {
  
      FetchGallery();
  },[]);

  const FetchGallery = () => {
    axios.get('/gallery').then((response) => {
      console.log('GET /gallery response is', response.data)
      setGalleryList(response.data);
     
    }).catch ((error) => {
      console.log('GET /gallery error is:', error)
    })
    
  }

  const updateCountLikes = (id) => {
    axios
      .put(`/gallery/like/${id}`)
      .then((response) => {
        console.log("PUT /gallery/likes/:${id} is", response);
        FetchGallery();
      })
      .catch((error) => {
        console.log("/gallery/likes/:${id} error is", error);
      });
  }
    return (
      <div className="App">
      <Header />
        <p>Gallery goes here</p>
        <GalleryList  galleryList={galleryList}
        updateCountLikes ={updateCountLikes}
        />
      </div>
    );
}

export default App;
