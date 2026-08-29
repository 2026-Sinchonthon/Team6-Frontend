import apiClient from "./client";

export function startTimer(userId) {
  return apiClient.post("/api/timer/start", null, { params: { userId } });
}

export function stopTimer(userId) {
  return apiClient.post("/api/timer/stop", null, { params: { userId } });
}

export function getTodayStudySeconds(userId) {
  return apiClient.get("/api/timer/today", { params: { userId } });
}
