import styles from './search_header.module.css';
import React, { memo, useRef } from 'react';

const SerchHeader = memo(({ onSearch, returnHome }) => {
  const inputRef = useRef();
  const handleSearch = () => {
    const value = inputRef.current.value;
    onSearch(value);
  };

  const onClick = () => {
    handleSearch();
  };

  const onKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo} onClick={returnHome}>
        <img className={styles.img} src="./images/logo.png" alt="logo" />
        <h2 className={styles.title}>SongTube</h2>
      </div>
      <input
        ref={inputRef}
        className={styles.input}
        type="search"
        placeholder="Search..."
        onKeyPress={onKeyPress}
      />
      <button className={styles.button} type="submit" onClick={onClick}>
        <img
          className={styles.buttonImg}
          src="./images/search.png"
          alt="button"
        />
      </button>
    </header>
  );
});

export default SerchHeader;
