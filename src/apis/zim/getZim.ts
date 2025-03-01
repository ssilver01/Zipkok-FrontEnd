import api from '../';

import type { ZipkokResponse } from 'interface/ZipkokResponse';
import type { HouseType } from 'types/HouseType';
import type { PriceType } from 'types/PriceType';

export interface RawRealEstate {
  realEstateId: number;
  imageURL: string;
  deposit: number;
  price: number;
  address: string;
  agent: string;
  transactionType: PriceType;
  realEstateType: HouseType;
}

export interface RealEstate {
  realEstateId: number;
  imageURL: string;
  deposit: number;
  price: number;
  address: string;
  agent: string;
  transactionType: PriceType;
  realEstateType: HouseType;
}

interface GetZimResult<T> {
  realEstateInfo: T[];
}

/**
 * `GET /zim`으로 찜한 매물 목록을 요청합니다.
 */
export async function getZim() {
  const path = '/zim';
  const method = 'GET';
  const params = {};
  const authRequired = true;

  const res = await api<ZipkokResponse<GetZimResult<RawRealEstate>>>(
    path,
    method,
    authRequired,
    params,
    undefined,
    undefined,
  );

  return {
    ...res,
    result: {
      ...res.result,
      realEstateInfo: res.result.realEstateInfo.map((realEstate) => ({
        ...realEstate,
        transactionType: realEstate.transactionType,
        realestateType: realEstate.realEstateType,
      })),
    },
  } as ZipkokResponse<GetZimResult<RealEstate>>;
}
