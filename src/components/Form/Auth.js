const CLIENT_ID = "1378e422222822be637375c27c25fdbb";
const REDIRECT_URI = "http://localhost:3000/api/member/kakao/callback";

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;