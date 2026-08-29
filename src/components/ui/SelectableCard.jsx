// 학교 선택 등 단일/다중 선택 화면에서 재사용하는 선택형 카드

function SelectableCard({ imageSrc, title, subtitle, selected = false, onClick, className = "" }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      className={`flex w-full flex-col items-center justify-center gap-2 rounded-[20px] border p-3 transition-colors ${
        selected ? "border-red-40 bg-red-02" : "border-gray-20 bg-gray-05"
      } ${className}`}
    >
      {imageSrc ? (
        <img src={imageSrc} alt="" className="size-20 rounded-full object-cover" />
      ) : (
        <div className="size-20 rounded-full bg-gray-40" />
      )}
      <div className="flex flex-col items-center justify-center gap-1">
        <p
          className={`text-20 font-semibold tracking-semibold ${selected ? "text-red-70" : "text-black"}`}
        >
          {title}
        </p>
        {subtitle && (
          <p className={`text-xs font-medium ${selected ? "text-red-70" : "text-gray-60"}`}>
            {subtitle}
          </p>
        )}
      </div>
    </button>
  );
}

export default SelectableCard;
