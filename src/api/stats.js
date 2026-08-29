import apiClient from "./client";

export function getMyStats(userId) {
  return apiClient.get("/api/users/me/stats", { params: { userId } });
}
