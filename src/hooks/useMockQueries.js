import { useQuery } from "@tanstack/react-query";
import { MOCK_RANK_STATS } from "../constants/mockData";

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
