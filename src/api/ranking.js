import apiClient from "./client";

// scope/targetId 조합의 정확한 의미(예: scope="college"|"department"에 어떤 id를 넣는지)는
// 아직 백엔드 문서에 설명이 없어 확인 후 사용할 것
export function getUserRanking(scope, targetId) {
  return apiClient.get("/api/rankings/users", { params: { scope, targetId } });
}

export function getCollegeRanking(schoolId) {
  return apiClient.get("/api/rankings/colleges", { params: { schoolId } });
}
