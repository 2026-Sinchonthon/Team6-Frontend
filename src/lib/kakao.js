export function getKakaoAuthorizeUrl() {
  const params = new URLSearchParams({
    client_id: import.meta.env.VITE_KAKAO_CLIENT_ID,
    redirect_uri: import.meta.env.VITE_KAKAO_REDIRECT_URI,
    response_type: "code",
  });

  return `https://kauth.kakao.com/oauth/authorize?${params.toString()}`;
}
