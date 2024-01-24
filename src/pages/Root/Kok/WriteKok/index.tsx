import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import propertyImg from 'assets/img/common/defaultThumbnail.png';
import { BottomBtn } from 'components';
import useNaviStore from 'contexts/naviStore';
import useMenu from 'hooks/useMenu';

import Contract from './Contract';
import InsideHome from './InsideHome';
import NearHome from './NearHome';
import styles from './WriteKok.module.css';

// for test

export default function KokItem() {
  // 상단 메뉴 설정
  const [TopMenu, Content, menuIndex] = useMenu([
    {
      name: '집 주변',
      element: (
        <NearHome
          pictures={[
            { id: 0, src: propertyImg },
            { id: 1, src: propertyImg },
            { id: 2, src: propertyImg },
            { id: 3, src: propertyImg },
            { id: 4, src: propertyImg },
          ]}
        />
      ),
    },

    {
      name: '집 내부',
      element: (
        <InsideHome
          pictures={[
            { id: 0, src: propertyImg },
            { id: 1, src: propertyImg },
            { id: 2, src: propertyImg },
            { id: 3, src: propertyImg },
            { id: 4, src: propertyImg },
          ]}
        />
      ),
    },

    {
      name: '중개 / 계약',
      element: (
        <Contract
          pictures={[
            { id: 0, src: propertyImg },
            { id: 1, src: propertyImg },
            { id: 2, src: propertyImg },
            { id: 3, src: propertyImg },
            { id: 4, src: propertyImg },
          ]}
        />
      ),
    },
  ]);

  const navigate = useNavigate();

  // 하단 내비게이션 바 설정
  const { setNaviMenu, setShowNaviBar } = useNaviStore();
  useEffect(() => {
    setNaviMenu('kok');
    setShowNaviBar(false);
  }, []);

  // kokId가 undefined이면 새로운 콕리스트 등록
  // kokId가 있으면 해당 콕리스트 수정
  const { kokId } = useParams<{ kokId: string }>();

  return (
    <div className={styles.root}>
      <TopMenu className={styles.top} />
      <Content />
      <BottomBtn text="저장하기" onClick={() => {}} />
    </div>
  );
}
