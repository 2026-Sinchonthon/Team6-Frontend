import { useState } from "react";
import SelectableCard from "../../components/ui/SelectableCard";
import Button from "../../components/ui/Button";
import { SCHOOLS } from "../../constants/schools";
import { SAFE_AREA_TOP } from "../../lib/safeArea";

function SchoolSelectPage({ onNext }) {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <div className={`flex h-full flex-col ${SAFE_AREA_TOP}`}>
      <div className="min-h-0 flex-1 overflow-y-auto px-5 pb-8">
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl leading-9 font-bold text-black">어느 학교에서 오셨나요?</h1>
          <p className="text-sm leading-5 text-gray-60">
            Sin:Time 시작을 위해 현재 재학 중인 대학교를 선택해 주세요.
          </p>
        </div>

        <div className="mt-7 grid grid-cols-2 gap-6">
          {SCHOOLS.map((school) => (
            <SelectableCard
              key={school.id}
              title={school.name}
              subtitle={school.englishName}
              selected={selectedId === school.id}
              onClick={() => setSelectedId(school.id)}
            />
          ))}
        </div>
      </div>

      <div className="shrink-0 px-5 pb-6">
        <Button disabled={!selectedId} onClick={() => onNext?.(selectedId)}>
          다음
        </Button>
      </div>
    </div>
  );
}

export default SchoolSelectPage;
