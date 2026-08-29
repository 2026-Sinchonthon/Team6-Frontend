import { useQuery } from "@tanstack/react-query";
import {
  MOCK_COLLEGE_OPTIONS,
  MOCK_COLLEGE_RANKING,
  MOCK_DEPARTMENT_RANKING,
  MOCK_RANK_STATS,
  MOCK_SCHOOL_OVERVIEW,
} from "../constants/mockData";

// 백엔드 연동 시 이 파일의 queryFn만 실제 API 호출(src/api)로 교체하기
function mockFetch(data, delayMs = 300) {
  return new Promise((resolve) => setTimeout(() => resolve(data), delayMs));
}

export function useRankStatsQuery() {
  return useQuery({
    queryKey: ["rankStats"],
    queryFn: () => mockFetch(MOCK_RANK_STATS),
  });
}

export function useCollegeOptionsQuery(schoolId) {
  return useQuery({
    queryKey: ["collegeOptions", schoolId],
    queryFn: () => mockFetch(MOCK_COLLEGE_OPTIONS),
  });
}

export function useSchoolOverviewQuery() {
  return useQuery({
    queryKey: ["schoolOverview"],
    queryFn: () => mockFetch(MOCK_SCHOOL_OVERVIEW),
  });
}

// scope: "college" = 교내 단과대 랭킹, "department" = 단과대 내 학과 랭킹
export function useCollegeRankingQuery(scope) {
  return useQuery({
    queryKey: ["collegeRanking", scope],
    queryFn: () => mockFetch(scope === "department" ? MOCK_DEPARTMENT_RANKING : MOCK_COLLEGE_RANKING),
  });
}
