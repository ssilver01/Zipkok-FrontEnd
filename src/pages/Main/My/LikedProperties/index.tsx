import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { getZim } from 'apis';
import { PropertyItem } from 'components';
import useUIStore from 'contexts/uiStore';

import styles from './LikedProperties.module.css';

import type { RealEstate } from 'apis/getZim';

const LikedProperties = () => {
  const [properties, setProperties] = useState<RealEstate[]>([]);
  const navigate = useNavigate();
  const ui = useUIStore();

  useEffect(() => {
    getZim().then((res) => setProperties(res.result.realEstateInfo));

    ui.setUI((state) => ({
      ...state,
      headerTitle: '찜한 매물',
      headerIcon: undefined,
      headerBackButtonEnabled: true,
      naviEnabled: false,
    }));
  }, []);

  return (
    <div className={styles.root}>
      {properties.map((property) => (
        <PropertyItem
          key={property.realEstateId}
          id={property.realEstateId}
          like={true}
          type={''}
          priceType={''}
          price={property.price}
          maintenanceFee={0}
          address={property.address}
          propertyName={property.agent}
          imageUrl={property.imageURL}
          kokList={true}
        />
      ))}
    </div>
  );
};

export default LikedProperties;
