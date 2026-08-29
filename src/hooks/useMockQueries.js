import { useQuery } from "@tanstack/react-query";
import {
  MOCK_COLLEGE_OPTIONS,
  MOCK_COLLEGE_RANKING,
  MOCK_COUPONS,
  MOCK_DEPARTMENT_RANKING,
  MOCK_RANK_STATS,
  MOCK_SCHOOL_OVERVIEW,
  MOCK_SINCHON_LEAGUE,
} from "../constants/mockData";

// 백엔드 연동 시 이 파일의 queryFn만 실제 API 호출(src/api)로 교체하기
function mockFetch(data, delayMs = 300) {
  return new Promise((resolve) => setTimeout(() => resolve(data), delayMs));
}

// hours(누적 시간) 합계 기준으로 순위를 다시 계산한다
// 데이터에 rank를 고정값으로 넣어두면 항목이 늘어나거나 순서가 바뀔 때 어긋나기 쉬워서,
// 정렬 결과로 매길때마다 새로 구한다 (백엔드 연동 후에도 동일한 방식으로 계산하면 됨)
function withRankByHours(items) {
  return [...items].sort((a, b) => b.hours - a.hours).map((item, index) => ({ ...item, rank: index + 1 }));
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
    queryFn: () =>
      mockFetch(withRankByHours(scope === "department" ? MOCK_DEPARTMENT_RANKING : MOCK_COLLEGE_RANKING)),
  });
}

export function useSinchonLeagueQuery() {
  return useQuery({
    queryKey: ["sinchonLeague"],
    queryFn: () => mockFetch(MOCK_SINCHON_LEAGUE),
  });
}

export function useCouponsQuery() {
  return useQuery({
    queryKey: ["coupons"],
    queryFn: () => mockFetch(MOCK_COUPONS),
  });
}
