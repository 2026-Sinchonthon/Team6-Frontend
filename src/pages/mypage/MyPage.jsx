import { useMyPageQuery } from "../../hooks/useMyPageQueries";
import ProfileCard from "../../components/ui/ProfileCard";
import IconStatCard from "../../components/ui/IconStatCard";
import ListItem from "../../components/ui/ListItem";
import { SAFE_AREA_TOP } from "../../lib/safeArea";

function MyPage({ onEditProfile, onOpenAccountSettings }) {
  const { data } = useMyPageQuery();
  const profile = data?.profile;
  const record = data?.studyRecord;
  // ProfileCard가 이름 뒤에 "님"을 직접 붙여 표시하므로, displayName에 이미 붙어 있으면 중복 제거
  const displayName = profile?.displayName?.replace(/님$/, "");

  return (
    <div className={`flex flex-col gap-14 bg-white px-5 pb-10 ${SAFE_AREA_TOP}`}>
      <div className="flex flex-col gap-8">
        <h1 className="text-2xl leading-9 font-bold text-black">마이페이지</h1>
        <ProfileCard
          imageSrc={profile?.profileImageUrl}
          name={displayName ?? "회원"}
          affiliation={profile?.affiliation ?? "소속 미입력"}
          onEdit={onEditProfile}
        />
      </div>

      <div className="flex flex-col gap-14">
        <div className="flex flex-col gap-5">
          <p className="text-base font-bold text-black">나의 스터디 기록</p>

          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-[30px] rounded-[20px] border border-[#d9d9d9] bg-red-02 px-9 py-3">
              <img src="/icons/mypage/school-badge.svg" alt="" className="size-12 shrink-0" />
              <div className="flex flex-1 flex-col items-start gap-1">
                <p className="text-xs font-bold text-gray-60">{record?.departmentName ?? "학과"} 상위</p>
                <p className="text-20 font-semibold tracking-semibold text-black">
                  {record?.departmentPercentile}%
                </p>
              </div>
            </div>

            <div className="flex gap-5">
              <IconStatCard icon="/icons/mypage/time-plot.svg" label="총 누적 시간" value={record?.totalTime} />
              <IconStatCard icon="/icons/mypage/calendar-day.svg" label="일일 평균" value={record?.dailyAverage} />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <p className="text-base font-bold text-black">계정 관리</p>
          <div className="rounded-xl border border-[#d9d9d9] p-3">
            <ListItem label="로그아웃 및 회원탈퇴" onClick={onOpenAccountSettings} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyPage;
