// 탭/카테고리 필터 등에서 재사용하는 빨간 알약 버튼

function FilterChip({ children, active = false, onClick, className = "" }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex h-[30px] shrink-0 items-center justify-center rounded-lg px-2 text-xs font-bold transition-colors ${
        active ? "bg-red-40 text-white" : "border border-red-40 bg-white text-red-40"
      } ${className}`}
    >
      {children}
    </button>
  );
}

export default FilterChip;
