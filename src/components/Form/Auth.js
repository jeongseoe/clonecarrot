const REST_API_KEY = "1378e422222822be637375c27c25fdbb";
const REDIRECT_URI = "http://localhost:3000/kakao";

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
