import { url } from 'constants/api';

import Cookies from 'js-cookie';
import storeNewTokensToCookie from 'utils/storeNewTokensToCookie';

import { searchAddress } from './address/searchAddress';
import { kakaoLogin } from './auth/kakaoLogin';
import { refreshTokens } from './auth/refreshTokens';
import { getKokConfig } from './kok/getKokConfig';
import { getKokContract } from './kok/getKokContract';
import { getKokDetail } from './kok/getKokDetail';
import { getKokInner } from './kok/getKokInner';
import { getKokOuter } from './kok/getKokOuter';
import { getKokReview } from './kok/getKokReview';
import { postKok } from './kok/postKok';
import { putKok } from './kok/putKok';
import { deletePin } from './pin/deletePin';
import { getDirection } from './pin/getDirection';
import { getPin } from './pin/getPin';
import { postPin } from './pin/postPin';
import { putPin } from './pin/putPin';
import { getMapRealEstate } from './realestate/getMapRealEstate';
import { getRealEstateInfo } from './realestate/getRealEstateInfo';
import { postRealEstate } from './realestate/postRealEstate';
import { deleteUser } from './user/deleteUser';
import { getMyPageInfo } from './user/getMyPageInfo';
import { getProfileEditInfo } from './user/getProfileEditInfo';
import { getUserDetail } from './user/getUserDetail';
import { getUserKokList } from './user/getUserKokList';
import { getUserKokOption } from './user/getUserKokOption';
import { logout } from './user/logout';
import { onBoarding } from './user/onBoarding';
import { putUser } from './user/putUser';
import putUserKokOption from './user/putUserKokOption';
import { signIn } from './user/signIn';
import { deleteZim } from './zim/deleteZim';
import { getZim } from './zim/getZim';
import { zim } from './zim/zim';

export {
  deletePin,
  deleteUser,
  putKok,
  searchAddress,
  getDirection,
  signIn,
  kakaoLogin,
  refreshTokens,
  onBoarding,
  getZim,
  zim,
  deleteZim,
  getUserDetail,
  getKokContract,
  getKokDetail,
  getKokInner,
  getKokOuter,
  getKokReview,
  getMyPageInfo,
  getProfileEditInfo,
  getMapRealEstate,
  logout,
  getUserKokOption,
  putUserKokOption,
  getPin,
  postPin,
  putPin,
  getRealEstateInfo,
  getUserKokList,
  putUser,
  getKokConfig,
  postRealEstate,
  postKok,
};

/**
 * 필요한 경우에 토큰 갱신을 먼저 수행하고 서버에 요청을 보냅니다.
 * `authRequired`가 `false`이면 토큰 갱신을 수행하지 않습니다.
 * @param path 요청을 보낼 하위 경로 (예: `/user`)
 * @param method HTTP 메소드
 * @param authRequired 인증이 필요한지 여부
 * @param params 쿼리 파라미터
 * @param body 요청 바디
 * @param headers 요청 헤더
 * @param contentType 요청 컨텐츠 타입
 */
export default async function api<T>(
  path: string,
  method = 'GET',
  authRequired: boolean,
  params?: any,
  body?: any,
  headers?: any,
  contentType?: string | null,
) {
  let accessToken = Cookies.get('accessToken');

  // access token 만료 시
  if (authRequired && accessToken === undefined) {
    accessToken = await storeNewTokensToCookie().then((res) => {
      if (res === null) throw new Error('로그인이 필요합니다.');
      return res.accessToken;
    });
  }

  const authHeader = authRequired
    ? {
        Authorization: `Bearer ${accessToken}`,
      }
    : {};

  let contentTypeHeader = {};

  if (contentType) contentTypeHeader = { 'Content-Type': contentType };
  else if (contentType === null) contentTypeHeader = {};
  else if (method !== 'GET')
    contentTypeHeader = { 'Content-Type': 'application/json' };

  const paramStr = params ? new URLSearchParams(params).toString() : '';
  const res = await fetch(`${url}${path}${paramStr ? '?' : ''}${paramStr}`, {
    method,
    headers: {
      ...contentTypeHeader,
      ...authHeader,
      ...headers,
    },
    body: JSON.stringify(body),
  });
  const data = (await res.json()) as T;
  return data;
}
