import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getTodayStudySeconds, startTimer, stopTimer } from "../api/timer";
import { getMyStats } from "../api/stats";
import useAuthStore from "../store/useAuthStore";

export function useTodayStudySecondsQuery() {
  const userId = useAuthStore((state) => state.userId);

  return useQuery({
    queryKey: ["todayStudySeconds", userId],
    queryFn: () => getTodayStudySeconds(userId),
    enabled: Boolean(userId),
  });
}

export function useMyStatsQuery() {
  const userId = useAuthStore((state) => state.userId);

  return useQuery({
    queryKey: ["myStats", userId],
    queryFn: () => getMyStats(userId),
    enabled: Boolean(userId),
  });
}

export function useStartTimerMutation() {
  const userId = useAuthStore((state) => state.userId);
  return useMutation({ mutationFn: () => startTimer(userId) });
}

export function useStopTimerMutation() {
  const userId = useAuthStore((state) => state.userId);
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => stopTimer(userId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todayStudySeconds", userId] });
      queryClient.invalidateQueries({ queryKey: ["myStats", userId] });
    },
  });
}
