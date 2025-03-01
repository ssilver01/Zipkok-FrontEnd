import React, { useState, useRef } from 'react';

import locationIcon from 'assets/img/line(1)/location.svg';
import { BottomBtn } from 'components';

import KakaoMap, { KakaoMapRef } from './KakaoMap';
import styles from './Map.module.css';

import type { Address } from 'interface/Address';

interface MapProps {
  confirmLocation: (location: Address) => void;
  defaultAddress?: Address;
}

export default function Map({ confirmLocation, defaultAddress }: MapProps) {
  const mapRef = useRef<KakaoMapRef>(null);
  const [address, setAddress] = useState<Address | undefined>(defaultAddress);

  const handleSubmit = () => {
    if (address) {
      confirmLocation(address);
    }
  };

  return (
    <div className={styles.root}>
      <KakaoMap
        setAddress={setAddress}
        ref={mapRef}
        defaultAddress={defaultAddress}
      />
      <div className={styles.bottom}>
        <h1>{address?.address_name}</h1>
        <button
          className={`imgBtn ${styles.locationBtn}`}
          onClick={mapRef.current?.getCurrentPosBtn}
        >
          <img src={locationIcon} />
          <span>현재 위치로 설정</span>
        </button>
      </div>
      <BottomBtn text="여기에 핀 등록하기" onClick={handleSubmit} occupySpace />
    </div>
  );
}
