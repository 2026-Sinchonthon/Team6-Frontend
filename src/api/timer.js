import apiClient from "./client";

// userId는 더 이상 파라미터로 보내지 않는다 (백엔드가 인증 토큰에서 직접 사용자를 식별함)
export function startTimer() {
  return apiClient.post("/api/timer/start");
}

export function stopTimer() {
  return apiClient.post("/api/timer/stop");
}

export function pauseTimer() {
  return apiClient.post("/api/timer/pause");
}

export function resumeTimer() {
  return apiClient.post("/api/timer/resume");
}

export function getTodayStudySeconds() {
  return apiClient.get("/api/timer/today");
}
