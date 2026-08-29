import apiClient from "./client";

export function getOtherSchools() {
  return apiClient.get("/api/other-schools");
}

export function getOtherSchool(id) {
  return apiClient.get(`/api/other-schools/${id}`);
}
