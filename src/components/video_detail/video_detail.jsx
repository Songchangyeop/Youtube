/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
import styles from './video_detail.module.css';

const VideoDetail = ({ video, video: { snippet }, video: { statistics } }) => {
  return (
    <section className={styles.detail}>
      <iframe
        className={styles.video}
        type="text/html"
        title="youtube video player"
        width="100%"
        src={`https://www.youtube.com/embed/${video.id}`}
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <div className={styles.description_container}>
        <h2>{snippet.title}</h2>
        <div className={styles.channel_description}>
          <div className={styles.channel_left}>
            <p className={styles.viewCount}>조회수 {statistics.viewCount}회</p>
            <p className={styles.date}>{snippet.publishedAt}</p>
          </div>
          <div className={styles.channel_right}>
            <div className={styles.likeContainer}>
              <i className={`${styles.likeIcon} fas fa-thumbs-up`}></i>
              <span className={styles.like}>{statistics.likeCount}</span>
            </div>
            <div className={styles.dislikeContainer}>
              <i className={`${styles.dislikeIcon} fas fa-thumbs-down`}></i>
              <span className={styles.dislike}>{statistics.dislikeCount}</span>
            </div>
          </div>
        </div>

        <div className={styles.bar}></div>
        <h3>{snippet.channelTitle}</h3>
        <div className={styles.bar}></div>
        <pre className={styles.description}>{snippet.description}</pre>
      </div>
    </section>
  );
};

export default VideoDetail;
