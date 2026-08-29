import apiClient from "./client";

export async function loginWithKakao(code) {
  const { data } = await apiClient.post("/auth/kakao", { code });
  return data;
}
