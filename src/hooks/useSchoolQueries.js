import { useQuery } from "@tanstack/react-query";
import { getOtherSchool, getOtherSchools } from "../api/otherSchools";

export function useOtherSchoolsQuery() {
  return useQuery({
    queryKey: ["otherSchools"],
    queryFn: getOtherSchools,
  });
}

export function useOtherSchoolQuery(id) {
  return useQuery({
    queryKey: ["otherSchool", id],
    queryFn: () => getOtherSchool(id),
    enabled: Boolean(id),
  });
}
