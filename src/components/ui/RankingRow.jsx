import Badge from "./Badge";

const TREND_ICON = {
  up: "/icons/trend/up.svg",
  down: "/icons/trend/down.svg",
};

// 랭킹 리스트 한 줄 (단과대 랭킹, 학과 랭킹 등에서 재사용)
// isMine: 내가 속한 항목이면 옅은 빨간 배경으로 강조
function RankingRow({ rank, name, status, hours, trend, isMine = false }) {
  return (
    <div
      className={`flex h-16 w-full items-center justify-between rounded-[20px] p-3 shadow-sm ${
        isMine ? "bg-red-02" : "bg-white"
      }`}
    >
      <div className="flex items-center gap-4">
        <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-red-40 text-xs font-semibold text-white">
          {rank}
        </span>
        <div className="flex flex-col items-start gap-2">
          <p className="text-base font-semibold text-black">{name}</p>
          <p className="text-xs leading-[18px] font-bold text-gray-60">{status}</p>
        </div>
      </div>

      <div className="flex shrink-0 items-center gap-2">
        {trend && <img src={TREND_ICON[trend]} alt={trend === "up" ? "상승" : "하락"} className="h-2 w-2.5" />}
        <Badge>{hours.toLocaleString()}h</Badge>
      </div>
    </div>
  );
}

export default RankingRow;
