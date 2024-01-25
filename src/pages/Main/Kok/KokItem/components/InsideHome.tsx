import React from 'react';

import { OptionsComponent } from 'components';
import data from 'models/kokItemInner.json';

import styles from '../KokItem.module.css';

const insideHome = () => {
  const { furnitureOptions, direction, options } = data.result;

  return (
    <div className={styles.content}>
      <div className={styles.furnitureCtn}>
        {furnitureOptions.map((tag, index) => (
          <p className={styles.furniture} key={index}>
            {tag}
          </p>
        ))}
      </div>
      <div className={styles.directCtn}>
        <h4>집 방향</h4>
        <input type="text" placeholder={direction} />
      </div>

      <div className={styles.optionsCtn}>
        <OptionsComponent optionData={options} />
      </div>
      <div className={styles.blank} />
      <div className={styles.blank} />
    </div>
  );
};

export default insideHome;
