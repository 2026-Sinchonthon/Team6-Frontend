import { useMemo, useState } from "react";
import useOnboardingStore from "../../store/useOnboardingStore";
import { useOtherSchoolsQuery } from "../../hooks/useSchoolQueries";
import { SCHOOLS } from "../../constants/schools";
import { SCHOOL_MAP_LAYOUT } from "../../constants/mockData";
import SchoolMapPin from "../../components/ui/SchoolMapPin";
import SchoolInfoPopup from "../../components/ui/SchoolInfoPopup";

function getSchool(schoolId) {
  return SCHOOLS.find((school) => school.id === schoolId);
}

function buildMessage({ entry, isMine, myEntry, mySchool }) {
  if (isMine) return "우리의 목표는 신촌 1위!";
  if (!myEntry || !mySchool) return null;

  const diff = Math.abs(myEntry.weeklyHours - entry.weeklyHours).toLocaleString();
  return entry.weeklyHours > myEntry.weeklyHours
    ? `우리 학교(${mySchool.shortName})와 ${diff}시간 차이!`
    : `${mySchool.shortName}와 ${diff}h 차이로 추격 중`;
}

function OtherSchoolPage() {
  const mySchool = useOnboardingStore((state) => state.school);
  const { data: otherSchools = [] } = useOtherSchoolsQuery();
  const [selectedSchoolId, setSelectedSchoolId] = useState(null);

  // GET /api/other-schools는 숫자 schoolId로 응답하고, 지도 픽셀 좌표는 프론트 문자열 id 기준이라
  // 학교 이름으로 두 쪽을 이어붙인다 (백엔드에 숫자 id 매핑 API가 아직 없음)
  const league = useMemo(
    () =>
      [...otherSchools]
        .sort((a, b) => b.totalStudyMinutes - a.totalStudyMinutes)
        .map((entry, index) => {
          const school = SCHOOLS.find((candidate) => candidate.name === entry.schoolName);
          if (!school) return null;

          return {
            schoolId: school.id,
            rank: index + 1,
            crown: index === 0,
            weeklyHours: Math.round(entry.totalStudyMinutes / 60),
            liveCount: entry.activeUserCount,
            ...SCHOOL_MAP_LAYOUT[school.id],
          };
        })
        .filter(Boolean),
    [otherSchools],
  );

  const myEntry = league.find((entry) => entry.schoolId === mySchool?.id);
  const selectedEntry = league.find((entry) => entry.schoolId === selectedSchoolId);
  const selectedSchool = selectedEntry && getSchool(selectedEntry.schoolId);

  return (
    <div className="relative h-full overflow-hidden bg-white">
      <img
        src="/images/map/sinchon-map.png"
        alt="신촌 지역 지도"
        className="absolute top-[-12px] left-[-193px] h-[826px] w-[718px] max-w-none object-cover"
      />

      <div className="absolute top-[63px] left-[21px] flex items-center gap-1">
        <img src="/images/splash/logo-mark.svg" alt="" className="h-[29px] w-[18px]" />
        <img src="/images/splash/logo-wordmark.svg" alt="Sin:Time" className="h-[21px] w-[84px]" />
      </div>

      {league.map((entry) => (
        <SchoolMapPin
          key={entry.schoolId}
          school={getSchool(entry.schoolId)}
          entry={entry}
          selected={selectedSchoolId === entry.schoolId}
          onClick={() => setSelectedSchoolId(entry.schoolId)}
        />
      ))}

      {selectedEntry && selectedSchool && (
        <SchoolInfoPopup
          school={selectedSchool}
          entry={selectedEntry}
          message={buildMessage({
            entry: selectedEntry,
            isMine: selectedSchoolId === mySchool?.id,
            myEntry,
            mySchool,
          })}
          onClose={() => setSelectedSchoolId(null)}
        />
      )}
    </div>
  );
}

export default OtherSchoolPage;
