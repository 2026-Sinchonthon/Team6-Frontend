import apiClient from "./client";

export function getSchools() {
  return apiClient.get("/api/schools");
}

export function getColleges(schoolId) {
  return apiClient.get(`/api/schools/${schoolId}/colleges`);
}

export function getDepartments(collegeId) {
  return apiClient.get(`/api/colleges/${collegeId}/departments`);
}
