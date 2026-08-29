import apiClient from "./client";

// 홈 화면 상단 3분할 요약(학교 종합/단과대/내 순위)
export function getRankingSummary() {
  return apiClient.get("/api/rankings/summary");
}

export function getSchoolRanking() {
  return apiClient.get("/api/rankings/schools");
}

export function getCollegeRanking(schoolId) {
  return apiClient.get("/api/rankings/colleges", { params: { schoolId } });
}

export function getDepartmentRanking(collegeId) {
  return apiClient.get("/api/rankings/departments", { params: { collegeId } });
}

// scope/targetId 조합의 정확한 의미(예: scope="college"|"department"에 어떤 id를 넣는지)는
// 아직 백엔드 문서에 설명이 없어 확인 후 사용할 것
export function getUserRanking(scope, targetId) {
  return apiClient.get("/api/rankings/users", { params: { scope, targetId } });
}
