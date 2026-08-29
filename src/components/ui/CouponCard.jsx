// 제휴 혜택 목록의 업체 카드

function CouponCard({ image, name, discount, status, onLocate }) {
  return (
    <div className="flex h-[106px] w-full items-center justify-between rounded-[20px] border border-[#d9d9d9] px-5 py-4">
      <div className="flex items-center gap-[17px]">
        <img
          src={image}
          alt=""
          className="size-[72px] shrink-0 rounded-lg border border-[#d9d9d9] object-cover"
        />
        <div className="flex flex-col items-start gap-2">
          <p className="text-base font-bold text-black">{name}</p>
          <span className="rounded bg-red-05 px-2 py-1 text-xs font-bold text-red-70">{discount}</span>
          <p className="text-xs font-bold text-gray-60">{status}</p>
        </div>
      </div>

      <button
        type="button"
        onClick={onLocate}
        aria-label={`${name} 위치 보기`}
        className="flex size-9 shrink-0 items-center justify-center rounded-full bg-red-02 p-1.5"
      >
        <img src="/icons/map-pin.png" alt="" className="size-full rounded-full object-cover" />
      </button>
    </div>
  );
}

export default CouponCard;
