import Badge from "./Badge";

// 홈 화면 상단 랭킹 요약 칩 (신촌 전체/단과대/학과 순위 등에서 재사용)

function RankStatCard({ badgeLabel, title, value, subtext, accent = false, showDivider = false }) {
  const textColor = accent ? "text-yellow-50k" : "text-white";

  return (
    <div
      className={`flex w-[120px] flex-col items-center justify-center overflow-hidden rounded-[20px] bg-white/20 px-4 py-2 shadow-lg ${
        showDivider ? "border-r border-white" : ""
      }`}
    >
      <div className="flex flex-col items-center gap-1">
        <Badge>{badgeLabel}</Badge>
        <div className="flex flex-col items-center gap-2 pb-3">
          <p className={`text-sm leading-5 font-bold ${textColor}`}>{title}</p>
          <p
            className={`text-20 ${accent ? "font-semibold tracking-semibold" : "font-normal tracking-regular"} ${textColor}`}
          >
            {value}
          </p>
        </div>
      </div>
      <p className={`text-xs leading-[18px] ${textColor}`}>{subtext}</p>
    </div>
  );
}

export default RankStatCard;
