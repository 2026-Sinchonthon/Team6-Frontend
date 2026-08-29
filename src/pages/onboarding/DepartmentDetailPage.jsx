import { useState } from "react";
import SummaryBanner from "../../components/ui/SummaryBanner";
import Select from "../../components/ui/Select";
import TextField from "../../components/ui/TextField";
import Button from "../../components/ui/Button";
import { useCollegeOptionsQuery } from "../../hooks/useMockQueries";
import { SAFE_AREA_TOP } from "../../lib/safeArea";

function DepartmentDetailPage({ school, onChangeSchool, onSubmit }) {
  const { data: collegeOptions = [] } = useCollegeOptionsQuery(school?.id);
  const [college, setCollege] = useState("");
  const [department, setDepartment] = useState("");

  const isComplete = Boolean(college) && department.trim().length > 0;

  return (
    <div className={`flex h-full flex-col ${SAFE_AREA_TOP}`}>
      <div className="min-h-0 flex-1 overflow-y-auto px-5 pb-8">
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl leading-9 font-bold text-black">상세 소속을 알려주세요</h1>
          <p className="text-14 tracking-regular text-gray-60">
            입력하신 정보는 교내 단과대 및 학과 랭킹에 반영됩니다.
          </p>
        </div>

        <div className="mt-7 flex flex-col gap-15">
          <SummaryBanner
            imageSrc={school?.logo}
            label="선택한 대학교"
            title={school?.name ?? "홍익대학교"}
            subtitle={school?.englishName ?? "Hongik University"}
            actionLabel="변경"
            onAction={onChangeSchool}
          />

          <div className="flex flex-col gap-6">
            <Select
              label="단과대"
              placeholder="단과대를 선택해주세요"
              value={college}
              options={collegeOptions}
              onChange={setCollege}
            />
            <TextField
              label="학과"
              placeholder="학과를 입력하세요"
              value={department}
              onChange={(event) => setDepartment(event.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="flex shrink-0 flex-col gap-3 px-5 pb-6">
        <Button
          disabled={!isComplete}
          onClick={() =>
            onSubmit?.({
              college: collegeOptions.find((option) => option.value === college)?.label ?? college,
              department,
            })
          }
        >
          Sin:Time 시작하기
        </Button>
        <p className="text-12 tracking-regular text-center text-gray-60">
          시작하기 버튼을 누르면 <span className="underline">이용약관</span>에 동의하게 됩니다.
        </p>
      </div>
    </div>
  );
}

export default DepartmentDetailPage;
