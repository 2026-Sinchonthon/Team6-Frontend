import { useQuery } from "@tanstack/react-query";
import { MOCK_COUPONS } from "../constants/mockData";

// 백엔드 연동 시 이 파일의 queryFn만 실제 API 호출(src/api)로 교체하기
function mockFetch(data, delayMs = 300) {
  return new Promise((resolve) => setTimeout(() => resolve(data), delayMs));
}

export function useCouponsQuery() {
  return useQuery({
    queryKey: ["coupons"],
    queryFn: () => mockFetch(MOCK_COUPONS),
  });
}
