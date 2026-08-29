import { useQuery } from "@tanstack/react-query";
import { getCollegeRanking, getDepartmentRanking, getRankingSummary, getSchoolRanking } from "../api/ranking";

export function useRankingSummaryQuery() {
  return useQuery({
    queryKey: ["rankingSummary"],
    queryFn: getRankingSummary,
  });
}

export function useSchoolRankingQuery() {
  return useQuery({
    queryKey: ["schoolRanking"],
    queryFn: getSchoolRanking,
  });
}

export function useCollegeRankingQuery(schoolId) {
  return useQuery({
    queryKey: ["collegeRanking", schoolId],
    queryFn: () => getCollegeRanking(schoolId),
    enabled: Boolean(schoolId),
  });
}

export function useDepartmentRankingQuery(collegeId) {
  return useQuery({
    queryKey: ["departmentRanking", collegeId],
    queryFn: () => getDepartmentRanking(collegeId),
    enabled: Boolean(collegeId),
  });
}
