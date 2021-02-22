
import React, { useEffect, useState } from 'react'
import style from './app.module.css'
import VideoList from './components/video_list/video_list';
import SearchHeader from './components/search_header/search_header'

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

  const search = query => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&type=video&key=AIzaSyC0CIniIu2m1UqExXXqFYk94wcG9PBP1_M`,
       requestOptions)
      .then(response => response.json())
      .then(result => result.items.map(item => ({...item, id: item.id.videoId})))
      .then(items => setVideos(items))
      .catch(error => console.log('error', error));
  }


  return (
    <div className={style.app}>
      <SearchHeader
      onSearch={search}
      />
      <VideoList
      videos ={videos}
      />
    </div>
  )
}




