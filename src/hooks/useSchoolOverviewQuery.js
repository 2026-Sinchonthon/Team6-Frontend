import { useQuery } from "@tanstack/react-query";
import { getMyOverview } from "../api/schoolOverview";

export function useMyOverviewQuery() {
  return useQuery({
    queryKey: ["myOverview"],
    queryFn: getMyOverview,
  });
}
