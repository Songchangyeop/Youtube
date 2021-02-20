/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
import styles from './video_detail.module.css';

const VideoDetail = ({ video, video: { snippet } }) => {
  return (
    <section className={styles.detail}>
      <iframe
        className={styles.video}
        type="text/html"
        title="youtube video player"
        width="100%"
        height="31.250em"
        src={`https://www.youtube.com/embed/${video.id}`}
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <div className={styles.description_container}>
        <h2>{snippet.title}</h2>
        <p className={styles.date}>{snippet.publishedAt}</p>
        <div className={styles.bar}></div>
        <h3>{snippet.channelTitle}</h3>
        <div className={styles.bar}></div>
        <pre className={styles.description}>{snippet.description}</pre>
      </div>
    </section>
  );
};

export default VideoDetail;
