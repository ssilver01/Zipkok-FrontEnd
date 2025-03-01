import { Address } from 'interface/Address';

import api from '../';

import type { ZipkokResponse } from 'interface/ZipkokResponse';
import type { Gender } from 'pages/SignIn';
import type { HouseType } from 'types/HouseType';
import type { PriceType } from 'types/PriceType';

export interface UserDetail {
  imageUrl: string;
  nickname: string;
  birthday: string;
  gender: Gender;
  address: string;
  longitude: number;
  latitude: number;
  realEstateType: HouseType;
  transactionType: PriceType;
  mpriceMin: number;
  mpriceMax: number;
  mdepositMin: number;
  mdepositMax: number;
  ydepositMin: number;
  ydepositMax: number;
  priceMin: number;
  priceMax: number;
}

/**
 * `GET /user/detail`으로 리스트 항목을 가져옵니다.
 */
export async function getUserDetail() {
  const path = '/user/detail';
  const method = 'GET';
  const params = {};
  const authRequired = true;

  const res = await api<ZipkokResponse<UserDetail>>(
    path,
    method,
    authRequired,
    params,
    undefined,
    undefined,
  );

  return res as ZipkokResponse<UserDetail>;
}
