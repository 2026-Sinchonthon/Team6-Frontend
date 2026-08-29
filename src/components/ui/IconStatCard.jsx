// 아이콘 + 라벨 + 값으로 구성된 통계 카드 (마이페이지 스터디 기록 등에서 재사용)

function IconStatCard({ icon, label, value, className = "" }) {
  return (
    <div
      className={`flex flex-1 flex-col items-center gap-3 rounded-[20px] border border-[#d9d9d9] p-3 ${className}`}
    >
      <img src={icon} alt="" className="size-12" />
      <div className="flex flex-col items-center gap-1">
        <p className="text-xs font-bold text-gray-60">{label}</p>
        <p className="text-20 font-semibold tracking-semibold text-black">{value}</p>
      </div>
    </div>
  );
}

export default IconStatCard;
