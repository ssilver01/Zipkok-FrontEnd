import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// import SearchIcon from '../../../../../assets/img/line(2)/search.svg';
import SearchIcon from 'assets/img/line(2)/search.svg';

import styles from './SearchBox.module.css';

export default function SearchBox() {
  const navigate = useNavigate();
  const handleSearchBoxClick = () => {
    navigate('../search');
  };
  return (
    <div className={styles.container}>
      <div className={styles.searchBox} onClick={handleSearchBoxClick}>
        <div className={styles.placeholder}>
          어느 지역의 매물을 찾고 계신가요?
        </div>
        <img src={SearchIcon}></img>
      </div>
    </div>
  );
}
