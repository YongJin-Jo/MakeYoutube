
import React, { useCallback, useEffect, useState } from 'react'
import style from './app.module.css'
import VideoList from './components/video_list/video_list';
import SearchHeader from './components/search_header/search_header'
import VideoDetail from './components/video_detail/video_detail';

export default function App({youtube}) {

  const [videos,setVideos] = useState([])
  const [selectedVideo, setSelectedVideo] = useState(null)
  
  const selectVideo = (video) =>{
    setSelectedVideo(video);
  };

  useEffect(() =>{
    youtube.mostPopular()
    .then(videos => setVideos(videos))
      //.catch(error => console.log('error', error));
  },[youtube]);

  const search = useCallback(
    query => {
      setSelectedVideo(null)
  
        youtube.search(query)
        .then(videos => 
          setVideos(videos))
        //.catch(error => console.log('error', error));
    },[youtube]) 

  

  return (
    <div className={style.app}>
      <SearchHeader
      onSearch={search}
      />
      <section className={style.content}>
      { selectedVideo &&
        <div className={style.detail}>
           <VideoDetail video ={selectedVideo}/>
        </div>
      }
        <div className ={style.list}>
          <VideoList
          videos ={videos}
          onVideoClick={selectVideo}
          display ={selectedVideo? 'list':'grid'}
          />
        </div>
      </section>
      
    </div>
  )
}




