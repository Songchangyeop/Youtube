import React from 'react';
import VideoItem from '../video_item/video_item';
import styles from './video_list.module.css';

const VideoList = (props) => {
  return (
    <ul className={styles.videos}>
      {props.videos.map((video) => (
        <VideoItem key={video.id} video={video}></VideoItem>
      ))}
    </ul>
  );
};

export default VideoList;
