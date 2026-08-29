import apiClient from "./client";

export function getMySummary() {
  return apiClient.get("/api/users/me/summary");
}

export function updateMySchool(schoolId) {
  return apiClient.patch("/api/users/me/school", { schoolId });
}

export function updateMyCollege(collegeId) {
  return apiClient.patch("/api/users/me/college", { collegeId });
}

// PR #12 이후: 학과는 목록에서 고르지 않고 사용자가 입력한 텍스트를 그대로 보낸다
// (같은 단과대 안에 동일한 이름이 있으면 백엔드가 재사용, 없으면 새로 생성)
export function updateMyDepartment(name) {
  return apiClient.patch("/api/users/me/department", { name });
}
