import apiClient from "./client";

export function getMySummary() {
  return apiClient.get("/api/users/me/summary");
}

export function updateMySchool(schoolId) {
  return apiClient.patch("/api/users/me/school", { schoolId });
}

export function updateMyDepartment(departmentId) {
  return apiClient.patch("/api/users/me/department", { departmentId });
}
