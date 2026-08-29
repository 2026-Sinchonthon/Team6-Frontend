import apiClient from "./client";

export function getMyOverview() {
  return apiClient.get("/api/schools/me/overview");
}
