import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getTodayStudySeconds, pauseTimer, resumeTimer, startTimer, stopTimer } from "../api/timer";
import { getMyStats } from "../api/stats";
import useAuthStore from "../store/useAuthStore";

export function useTodayStudySecondsQuery() {
  const userId = useAuthStore((state) => state.userId);

  return useQuery({
    queryKey: ["todayStudySeconds", userId],
    queryFn: getTodayStudySeconds,
    enabled: Boolean(userId),
  });
}

export function useMyStatsQuery() {
  const userId = useAuthStore((state) => state.userId);

  return useQuery({
    queryKey: ["myStats", userId],
    queryFn: getMyStats,
    enabled: Boolean(userId),
  });
}

export function useStartTimerMutation() {
  return useMutation({ mutationFn: startTimer });
}

export function usePauseTimerMutation() {
  return useMutation({ mutationFn: pauseTimer });
}

export function useResumeTimerMutation() {
  return useMutation({ mutationFn: resumeTimer });
}

export function useStopTimerMutation() {
  const userId = useAuthStore((state) => state.userId);
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: stopTimer,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todayStudySeconds", userId] });
      queryClient.invalidateQueries({ queryKey: ["myStats", userId] });
    },
  });
}
