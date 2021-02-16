import React, { useEffect, useState } from 'react';
import styles from './app.module.css';
import SerchHeader from './components/search_header/serch_header';
import VideoList from './components/video_list/video_list';

const App = ({ youtube }) => {
  const [videos, setVideos] = useState([]);

  const search = (query) => {
    youtube
      .search(query) //
      .then((videos) => setVideos(videos));
  };

  useEffect(() => {
    youtube
      .mostPopular() //
      .then((videos) => setVideos(videos));
  }, []);

  return (
    <div className={styles.app}>
      <SerchHeader onSearch={search}></SerchHeader>
      <VideoList videos={videos}></VideoList>
    </div>
  );
};

export default App;
