import { useQuery } from "@tanstack/react-query";
import { getColleges, getDepartments, getSchools } from "../api/schoolCatalog";

export function useSchoolsQuery() {
  return useQuery({
    queryKey: ["schools"],
    queryFn: getSchools,
  });
}

export function useCollegesQuery(schoolId) {
  return useQuery({
    queryKey: ["colleges", schoolId],
    queryFn: () => getColleges(schoolId),
    enabled: Boolean(schoolId),
  });
}

export function useDepartmentsQuery(collegeId) {
  return useQuery({
    queryKey: ["departments", collegeId],
    queryFn: () => getDepartments(collegeId),
    enabled: Boolean(collegeId),
  });
}
