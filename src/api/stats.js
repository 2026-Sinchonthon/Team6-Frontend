import apiClient from "./client";

export function getMyStats() {
  return apiClient.get("/api/users/me/stats");
}
