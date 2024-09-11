import { useNavigate } from 'react-router-dom';

import { postKok, putKok } from 'apis';
import useModal from 'contexts/modalStore';

import type { KokConfigResult } from 'apis/kok/getKokConfig';
import type { KokReview } from 'apis/kok/getKokReview';

interface SaveKokProps {
  kokId: string | null;
  realEstateId: string | null;
  kokConfig: KokConfigResult;
  review: KokReview;
  outerOptions: any;
  innerOptions: any;
  contractOptions: any;
  pictureData: File[];
}

export const saveKok = async ({
  kokId,
  realEstateId,
  kokConfig,
  review,
  outerOptions,
  innerOptions,
  contractOptions,
  pictureData,
}: SaveKokProps) => {
  const modal = useModal();
  const navigate = useNavigate();
  // 새 콕 작성
  if (
    (kokId === '' || kokId === null) &&
    realEstateId !== '' &&
    realEstateId !== null
  ) {
    const res = await postKok(
      parseInt(realEstateId),
      kokConfig.checkedHilights ?? [],
      kokConfig.checkedFurnitureOptions ?? [],
      ' ',
      {
        checkedImpressions: review.impressions,
        facilityStarCount: review.facilityStarCount,
        infraStarCount: review.infraStarCount,
        structureStarCount: review.structureStarCount,
        vibeStarCount: review.vibeStarCount,
        reviewText: review.reviewText,
      },
      outerOptions,
      innerOptions,
      contractOptions,
      pictureData,
    );
    if (res.code === 7011) navigate('/kok/complete');
    else {
      modal.open({
        title: '콕리스트 등록 실패',
        description: res.message,
        primaryButton: '확인',
      });
    }
  }
  // 기존 콕 수정
  else if (kokId !== null && kokId !== '') {
    const res = await putKok({
      kokId: parseInt(kokId),
      checkedHighlights: kokConfig.checkedHilights ?? [],
      checkedFurnitureOptions: kokConfig.checkedFurnitureOptions ?? [],
      direction: ' ',
      checkedOuterOptions: outerOptions,
      checkedInnerOptions: innerOptions,
      checkedContractOptions: contractOptions,
      files: pictureData,
      reviewInfo: {
        checkedImpressions: review.impressions || [],
        facilityStarCount: review.facilityStarCount || 0,
        infraStarCount: review.infraStarCount || 0,
        structureStarCount: review.structureStarCount || 0,
        vibeStarCount: review.vibeStarCount || 0,
        reviewText: review.reviewText || '',
      },
    });
    if (res.code === 7014) navigate('/kok/complete');
    else {
      modal.open({
        title: '콕리스트 수정 실패',
        description: res.message,
        primaryButton: '확인',
      });
    }
  }
};
