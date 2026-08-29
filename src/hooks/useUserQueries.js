import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getMySummary, updateMyDepartment, updateMySchool } from "../api/user";
import useAuthStore from "../store/useAuthStore";

export function useUserSummaryQuery() {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  return useQuery({
    queryKey: ["userSummary"],
    queryFn: getMySummary,
    enabled: isAuthenticated,
  });
}

export function useUpdateSchoolMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateMySchool,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["userSummary"] }),
  });
}

export function useUpdateDepartmentMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateMyDepartment,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["userSummary"] }),
  });
}
