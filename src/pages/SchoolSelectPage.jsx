import { useState } from "react";
import SelectableCard from "../components/ui/SelectableCard";
import Button from "../components/ui/Button";

const SCHOOLS = [
  { id: "sogang", name: "서강대학교", englishName: "Sogang University" },
  { id: "myongji", name: "명지대학교", englishName: "Myongji University" },
  { id: "yonsei", name: "연세대학교", englishName: "Yonsei University" },
  { id: "hongik", name: "홍익대학교", englishName: "Hongik University" },
  { id: "ewha", name: "이화여자대학교", englishName: "Ewha Womans University" },
];

function SchoolSelectPage({ onNext }) {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <div className="flex h-full flex-col gap-7 px-5 pb-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl leading-9 font-bold text-black">어느 학교에서 오셨나요?</h1>
        <p className="text-sm leading-5 text-gray-60">
          Syn:Time 시작을 위해 현재 재학 중인 대학교를 선택해 주세요.
        </p>
      </div>

      <div className="grid flex-1 grid-cols-2 gap-6">
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

      <Button disabled={!selectedId} onClick={() => onNext?.(selectedId)}>
        다음
      </Button>
    </div>
  );
}

export default SchoolSelectPage;
