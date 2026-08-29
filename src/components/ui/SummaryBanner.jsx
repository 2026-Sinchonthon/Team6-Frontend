// 이전 단계에서 선택한 값을 요약해서 보여주고 변경 링크를 제공하는 배너

function SummaryBanner({ imageSrc, label, title, subtitle, actionLabel, onAction }) {
  return (
    <div className="flex h-[78px] w-full items-center justify-between rounded-xl border border-red-25 bg-red-05 px-3 py-4">
      <div className="flex items-center gap-5">
        {imageSrc ? (
          <img src={imageSrc} alt="" className="size-8 shrink-0 rounded-full border border-[#d9d9d9] object-cover" />
        ) : (
          <div className="size-8 shrink-0 rounded-full border border-[#d9d9d9] bg-white" />
        )}
        <div className="flex flex-col gap-1">
          <p className="text-sm text-gray-60">{label}</p>
          <div className="flex items-baseline gap-1">
            <span className="text-base leading-5 font-bold text-black">{title}</span>
            {subtitle && <span className="text-sm text-gray-60">{subtitle}</span>}
          </div>
        </div>
      </div>
      {actionLabel && (
        <button
          type="button"
          onClick={onAction}
          className="shrink-0 text-sm font-semibold text-red-70 underline"
        >
          {actionLabel}
        </button>
      )}
    </div>
  );
}

export default SummaryBanner;
