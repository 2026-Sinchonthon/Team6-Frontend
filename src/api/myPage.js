import apiClient from "./client";

export function getMyPage() {
  return apiClient.get("/api/mypage");
}

export function getMyPageProfile() {
  return apiClient.get("/api/mypage/profile");
}

export function getMyPageStudyRecord() {
  return apiClient.get("/api/mypage/study-record");
}
