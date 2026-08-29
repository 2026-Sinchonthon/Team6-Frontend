import { useEffect, useRef, useState } from "react";
import RankStatCard from "../../components/ui/RankStatCard";
import useOnboardingStore from "../../store/useOnboardingStore";
import { useRankStatsQuery } from "../../hooks/useMockQueries";
import { SAFE_AREA_TOP } from "../../lib/safeArea";

function formatElapsed(ms) {
  const totalSeconds = Math.floor(ms / 1000);
  const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, "0");
  const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, "0");
  const seconds = String(totalSeconds % 60).padStart(2, "0");
  return `${hours}:${minutes}:${seconds}`;
}

function HomePage() {
  const school = useOnboardingStore((state) => state.school);
  const college = useOnboardingStore((state) => state.college);
  const department = useOnboardingStore((state) => state.department);

  const { data: rankStats, isLoading: isRankStatsLoading } = useRankStatsQuery();

  const [isRunning, setIsRunning] = useState(false);
  const [elapsedMs, setElapsedMs] = useState(0);
  const startedAtRef = useRef(null);

  useEffect(() => {
    if (!isRunning) return undefined;

    startedAtRef.current = Date.now() - elapsedMs;
    const interval = setInterval(() => {
      setElapsedMs(Date.now() - startedAtRef.current);
    }, 1000);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isRunning]);

  return (
    <div className="flex h-full flex-col bg-white">
      <div className={`flex flex-col gap-8 bg-red-40 px-5 pb-8 ${SAFE_AREA_TOP}`}>
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-1">
            <img src="/images/splash/logo-mark.svg" alt="" className="h-[29px] w-[18px]" />
            <img src="/images/splash/logo-wordmark.svg" alt="Sin:Time" className="h-[21px] w-[84px]" />
          </div>
          <div className="flex flex-col items-end gap-1">
            <p className="text-18 tracking-bold font-bold text-white">{school?.name ?? "학교 미선택"}</p>
            <p className="text-14 tracking-semibold font-semibold text-white">
              {[college, department].filter(Boolean).join(" ") || "소속 미입력"}
            </p>
          </div>
        </div>

        <div className="flex justify-center">
          <RankStatCard
            badgeLabel="신촌 5개 대학"
            title="학교 종합"
            value={isRankStatsLoading ? "-" : `${rankStats.schoolRank.rank}위`}
            subtext={isRankStatsLoading ? "-" : `총 ${rankStats.schoolRank.totalHours.toLocaleString()}h`}
            showDivider
          />
          <RankStatCard
            badgeLabel="홍익대 단과대"
            title={college ?? "단과대"}
            value={isRankStatsLoading ? "-" : `${rankStats.collegeRank.rank}위`}
            subtext={isRankStatsLoading ? "-" : `총 ${rankStats.collegeRank.totalHours.toLocaleString()}h`}
            showDivider
          />
          <RankStatCard
            badgeLabel={department ?? "학과"}
            title="나의 순위"
            value={isRankStatsLoading ? "-" : `${rankStats.myRank.rank}위`}
            subtext={isRankStatsLoading ? "-" : `내 누적 ${rankStats.myRank.cumulativeHours}h`}
            accent
          />
        </div>
      </div>

      <div className="flex flex-1 flex-col items-center justify-center gap-8 px-5">
        <p
          className={`text-[56px] leading-[1.3] font-bold tracking-[0.02em] ${
            isRunning ? "text-gray-80" : "text-gray-20"
          }`}
        >
          {formatElapsed(elapsedMs)}
        </p>

        <div className="flex flex-col items-center gap-3">
          <p className="text-sm font-semibold text-red-40">{isRunning ? "정지하기" : "시작하기"}</p>
          <button
            type="button"
            onClick={() => setIsRunning((prev) => !prev)}
            className="flex size-25 items-center justify-center rounded-full bg-red-40 shadow-lg"
          >
            <img
              src={isRunning ? "/icons/timer/stop.svg" : "/icons/timer/play.svg"}
              alt={isRunning ? "정지" : "시작"}
              className={isRunning ? "size-15" : "size-10"}
            />
          </button>
        </div>

        <div className="rounded-xl bg-red-05 px-2 py-2">
          <p className="text-xs font-semibold text-[#4a5568]">
            🔥 {college ?? "단과대"} 내 {isRankStatsLoading ? "-" : `${rankStats.collegeRank.rank}위`} 달성 중!
          </p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
