// 마이페이지 상단 프로필 카드 (이름 + 소속 + 수정 링크)

function ProfileCard({ imageSrc, name, affiliation, onEdit }) {
  return (
    <div className="flex h-[78px] w-full items-center justify-between rounded-xl border border-[#d9d9d9] px-3 py-4">
      <div className="flex items-center gap-5">
        {imageSrc ? (
          <img src={imageSrc} alt="" className="size-8 shrink-0 rounded-full border border-[#d9d9d9] object-cover" />
        ) : (
          <div className="size-8 shrink-0 rounded-full border border-[#d9d9d9] bg-white" />
        )}
        <div className="flex flex-col items-start gap-1">
          <div className="flex items-center gap-1">
            <span className="text-base font-bold text-black">{name}</span>
            <span className="text-sm text-gray-60">님</span>
          </div>
          <p className="text-sm text-gray-60">{affiliation}</p>
        </div>
      </div>
      <button type="button" onClick={onEdit} className="shrink-0 text-sm font-semibold text-red-70 underline">
        수정
      </button>
    </div>
  );
}

export default ProfileCard;
