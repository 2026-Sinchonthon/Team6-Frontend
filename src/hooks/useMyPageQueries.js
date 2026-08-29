import { useQuery } from "@tanstack/react-query";
import { getMyPage, getMyPageProfile, getMyPageStudyRecord } from "../api/myPage";

export function useMyPageQuery() {
  return useQuery({
    queryKey: ["myPage"],
    queryFn: getMyPage,
  });
}

export function useMyPageProfileQuery() {
  return useQuery({
    queryKey: ["myPageProfile"],
    queryFn: getMyPageProfile,
  });
}

export function useMyPageStudyRecordQuery() {
  return useQuery({
    queryKey: ["myPageStudyRecord"],
    queryFn: getMyPageStudyRecord,
  });
}
