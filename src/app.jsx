import React, { useCallback, useEffect, useState } from 'react';
import styles from './app.module.css';
import SerchHeader from './components/search_header/serch_header';
import VideoDetail from './components/video_detail/video_detail';
import VideoList from './components/video_list/video_list';

const App = ({ youtube }) => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const selectVideo = (video) => {
    setSelectedVideo(video);
  };

  const search = useCallback(
    (query) => {
      setSelectedVideo(null);
      youtube
        .search(query) //
        .then((videos) => setVideos(videos));
    },
    [youtube]
  );

  const returnHome = useCallback(() => {
    setSelectedVideo(null);

    youtube
      .mostPopular() //
      .then((videos) => setVideos(videos));
  }, [youtube]);

  useEffect(() => {
    youtube
      .mostPopular() //
      .then((videos) => setVideos(videos));
  }, [youtube]);

  return (
    <div className={styles.app}>
      <SerchHeader onSearch={search} returnHome={returnHome}></SerchHeader>
      <section className={styles.content}>
        {selectedVideo && (
          <div className={styles.detail}>
            <VideoDetail video={selectedVideo}></VideoDetail>
          </div>
        )}
        <div className={styles.list}>
          <VideoList
            videos={videos}
            onVideoClick={selectVideo}
            display={selectedVideo ? 'list' : 'grid'}
          ></VideoList>
        </div>
      </section>
    </div>
  );
};

export default App;
