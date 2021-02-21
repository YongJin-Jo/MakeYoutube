import React from 'react'
import styles from './video_item.module.css'

const VideoItem = (props) => {
  return(
  <li className={styles.container}>
    <div className ={styles.video}>
    <img 
      className={styles.thumbnails}
      src={props.videos.thumbnails.medium.url}
      alt="video thumbanail"
      />
    <div className={styles.metadata}>
      <p className ={styles.title}>{props.videos.title}</p>
      <p className ={styles.channelTitle}>{props.videos.channelTitle}</p>
    </div>
    </div>
  </li>)
}

export default VideoItem
