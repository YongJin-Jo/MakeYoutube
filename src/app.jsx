
import React, { useEffect, useState } from 'react'
import style from './app.module.css'
import VideoList from './components/video_list/video_list';
import SearchHeader from './components/search_header/search_header'

export default function App({youtube}) {

  const [videos,setVideos] = useState([])

  useEffect(() =>{
    youtube.mostPopular()
    .then(videos => setVideos(videos))
      //.catch(error => console.log('error', error));
  },[]);

  const search = query => {
      youtube.search(query)
      .then(videos => setVideos(videos))
      //.catch(error => console.log('error', error));
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




