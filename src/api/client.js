import axios from "axios";
import useAuthStore from "../store/useAuthStore";

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: { "Content-Type": "application/json" },
});

apiClient.interceptors.request.use((config) => {
  const { accessToken } = useAuthStore.getState();
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});

let refreshPromise = null;

function refreshAccessToken() {
  const { refreshToken } = useAuthStore.getState();
  if (!refreshToken) return Promise.reject(new Error("No refresh token"));

  if (!refreshPromise) {
    refreshPromise = axios
      .post(`${import.meta.env.VITE_API_BASE_URL}/api/auth/refresh`, { refreshToken })
      .then(({ data }) => {
        const accessToken = data.data.accessToken;
        useAuthStore.getState().setAuth(accessToken);
        return accessToken;
      })
      .finally(() => {
        refreshPromise = null;
      });
  }

  return refreshPromise;
}

apiClient.interceptors.response.use(
  (response) => {
    const body = response.data;
    // 일부 엔드포인트(timer, health)는 {success,data,error} 봉투 없이 원시 값/빈 응답을 그대로 반환한다
    if (!body || typeof body !== "object" || !("success" in body)) return body;

    const { success, data, error } = body;
    if (!success) return Promise.reject(new Error(error?.message ?? "요청에 실패했습니다."));
    return data;
  },
  async (error) => {
    const { config, response } = error;

    if (response?.status === 401 && !config._retried) {
      config._retried = true;
      try {
        const accessToken = await refreshAccessToken();
        config.headers.Authorization = `Bearer ${accessToken}`;
        return apiClient(config);
      } catch {
        useAuthStore.getState().clearAuth();
      }
    }

    return Promise.reject(error);
  },
);

export default apiClient;
