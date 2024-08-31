import type { HouseType } from '../types/HouseType';
import type { PriceType } from '../types/PriceType';

interface UserInfo {
  imageUrl: string | null;
  nickname: string;
  birthday: string;
  gender: Gender;
  realEstateType?: HouseType;
  address: string;
  latitude: number;
  longitude: number;
  transactionType?: PriceType;
  mpriceMin?: number;
  mpriceMax?: number;
  mdepositMin?: number;
  mdepositMax?: number;
  ydepositMin?: number;
  ydepositMax?: number;
  purchaseMin?: number;
  purchaseMax?: number;
}

export type { UserInfo };
