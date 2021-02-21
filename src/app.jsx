
import React, { useEffect, useState } from 'react'
import './app.css'
import VideoList from './components/video_list/video_list';
import Header from './components/header'

export default function App() {

  const [videos,setVideos] = useState([])

  useEffect(() =>{
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyC0CIniIu2m1UqExXXqFYk94wcG9PBP1_M", requestOptions)
      .then(response => response.json())
      .then(result => setVideos(result.items))
      .catch(error => console.log('error', error));
  },[]);


  return (
    <div >
      
      <main>
        <VideoList
        videos ={videos}
        />
      </main> 
    </div>
  )
}




