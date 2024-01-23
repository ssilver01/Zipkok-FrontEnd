import React from 'react';
import styles from './KokItem.module.css';
import data from 'models/kokItemContract.json';
import { OptionsComponent, SwiperCom } from 'components';

const Contract = () => {
  const { options, imageInfo } = data.result;

  return (
    <div>
      <div className={styles.body}>
        <OptionsComponent optionData={options} />
        <div className={styles.ContractCtn}>
          <h4>계약서 사진</h4>
        </div>
      </div>
      <SwiperCom imageUrls={imageInfo.imageUrls}></SwiperCom>
      <div className={styles.blank} />
      <div className={styles.blank} />
    </div>
  );
};

export default Contract;
