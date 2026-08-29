// 다른 학교(신촌 리그) 지도 화면의 학교 위치 핀

function SchoolMapPin({ school, entry, selected, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`group absolute flex flex-col items-center ${selected ? "z-10" : "hover:z-10"}`}
      style={{ top: entry.position.top, left: entry.position.left }}
    >
      {entry.crown && <img src="/icons/crown.svg" alt="" className="size-9" />}
      <span
        className={`block size-15 rounded-full bg-gray-30 bg-cover bg-center transition-transform group-hover:scale-110 ${
          selected ? "scale-110" : ""
        }`}
        style={{ backgroundImage: `url(${school.logo})`, boxShadow: entry.glow }}
      />
      <span className="mt-1.5 text-xs font-bold text-white">현재 {entry.rank}위</span>
    </button>
  );
}

export default SchoolMapPin;
