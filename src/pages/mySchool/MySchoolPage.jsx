import { useState } from "react";
import useOnboardingStore from "../../store/useOnboardingStore";
import { useCollegeRankingQuery, useSchoolOverviewQuery } from "../../hooks/useMockQueries";
import Badge from "../../components/ui/Badge";
import RankingRow from "../../components/ui/RankingRow";
import { SAFE_AREA_TOP } from "../../lib/safeArea";

function MySchoolPage() {
  const school = useOnboardingStore((state) => state.school);
  const college = useOnboardingStore((state) => state.college);
  const department = useOnboardingStore((state) => state.department);

  const { data: overview, isLoading: isOverviewLoading } = useSchoolOverviewQuery();
  const [scope, setScope] = useState("college");
  const { data: ranking = [] } = useCollegeRankingQuery(scope);

  return (
    <div className="flex flex-col gap-2 bg-gray-05">
      <div className={`flex flex-col gap-8 bg-white px-5 pb-10 ${SAFE_AREA_TOP}`}>
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl leading-9 font-bold text-black">내 학교</h1>
          <p className="text-sm leading-5 text-gray-60">
            우리가 함께 모은 집중의 시간들이 모여
            <br />
            우리 학교의 새로운 기록이 됩니다.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <p className="text-sm text-gray-60">신촌 경쟁 {isOverviewLoading ? "-" : overview.competitionRound}차 종료까지</p>
            <p className="flex items-end gap-1">
              <span className="text-18 tracking-bold font-bold text-black">
                {isOverviewLoading ? "-" : overview.remainingLabel}
              </span>
              <span className="text-sm text-black">남음</span>
            </p>
          </div>

          <div className="flex items-center justify-between rounded-xl border border-[#d9d9d9] px-6 py-4">
            <div className="flex flex-col gap-1">
              <div className="flex flex-col">
                <span className="text-base font-bold text-black">{school?.name ?? "학교 미선택"}</span>
                <span className="text-sm text-gray-60">{school?.englishName}</span>
              </div>
              <p className="text-20 tracking-bold font-bold text-black">
                {isOverviewLoading ? "-" : `${overview.rank}위`}
              </p>
            </div>
            <Badge>총 {isOverviewLoading ? "-" : overview.totalHours.toLocaleString()}h</Badge>
          </div>

          <div className="flex flex-col gap-3">
            <p className="text-sm font-bold text-black">나의 기여도</p>
            <div className="flex flex-col items-start gap-1 rounded-xl border border-[#d9d9d9] px-6 py-3">
              <Badge>상위 {isOverviewLoading ? "-" : overview.contributionPercentile}%</Badge>
              <p className="text-sm text-gray-60">
                {department ?? "학과"} 총 누적 시간의{" "}
                <span className="font-bold">{isOverviewLoading ? "-" : overview.contributionRate}%</span> 기여 중!
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4 bg-white px-5 pt-6 pb-10">
        <div className="flex flex-col gap-1">
          <p className="text-16 tracking-bold font-bold text-black">현재 랭킹 현황</p>
          <p className="text-sm text-gray-60">공부 시간이 쌓이면 랭킹 순위가 올라가요</p>
        </div>

        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => setScope("college")}
            className={`h-[30px] rounded-lg px-2 text-xs font-bold ${
              scope === "college" ? "bg-red-40 text-white" : "border border-red-40 bg-white text-red-40"
            }`}
          >
            교내 단과대 랭킹
          </button>
          <button
            type="button"
            onClick={() => setScope("department")}
            className={`h-[30px] rounded-lg px-2 text-xs font-bold ${
              scope === "department" ? "bg-red-40 text-white" : "border border-red-40 bg-white text-red-40"
            }`}
          >
            {college ?? "단과대"} 내 학과 랭킹
          </button>
        </div>

        <div className="flex flex-col gap-3">
          {ranking.map((item, index) => (
            <RankingRow key={`${item.name}-${index}`} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MySchoolPage;
