// 계정 관리 등에서 재사용하는 클릭 가능한 목록 행 (아이콘 + 라벨 + 화살표)

function ListItem({ icon, label, onClick, className = "" }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex w-full items-center justify-between py-1 ${className}`}
    >
      <div className="flex items-center gap-2">
        {icon}
        <span className="text-sm font-medium text-black">{label}</span>
      </div>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="size-4 text-gray-30">
        <path d="M9 6l6 6-6 6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
}

export default ListItem;
