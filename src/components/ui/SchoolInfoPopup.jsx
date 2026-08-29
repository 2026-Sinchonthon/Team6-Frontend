import Badge from "./Badge";

// 다른 학교 지도 화면에서 핀을 눌렀을 때, 해당 핀 근처에 뜨는 학교 정보 카드
function SchoolInfoPopup({ school, entry, message, onClose }) {
  return (
    <div
      className="absolute w-[300px] rounded-[20px] bg-white/90 px-3 py-5 shadow-xl"
      style={{ top: entry.popupPosition.top, left: entry.popupPosition.left }}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="닫기"
        className="absolute top-3 right-3 flex size-7 items-center justify-center rounded-full bg-gray-10"
      >
        <img src="/icons/close.svg" alt="" className="size-6" />
      </button>

      <div className="flex flex-col items-center gap-3">
        <img src={school.logo} alt="" className="size-15 rounded-full object-cover" />
        <div className="flex flex-col items-center gap-1">
          <p className="text-20 font-semibold tracking-semibold text-black">{school.name}</p>
          <p className="text-xs font-bold text-gray-60">신촌 리그 {entry.rank}위</p>
        </div>
      </div>

      <div className="mt-5 flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <div className="flex flex-col items-start gap-1 rounded-xl border border-[#d9d9d9] px-5 py-3">
            <p className="text-sm text-gray-60">이번 주 누적 시간</p>
            <Badge>{entry.weeklyHours.toLocaleString()}h</Badge>
          </div>
          <div className="flex flex-col items-start gap-1 rounded-xl border border-[#d9d9d9] px-5 py-3">
            <p className="text-sm text-gray-60">실시간 집중 인원</p>
            <Badge>{entry.liveCount.toLocaleString()}명</Badge>
          </div>
        </div>
        <div className="rounded-xl border border-[#d9d9d9] bg-red-02 px-6 py-2">
          <p className="text-xs font-semibold text-red-70">{message}</p>
        </div>
      </div>
    </div>
  );
}

export default SchoolInfoPopup;
