import useOnboardingStore from "../../store/useOnboardingStore";

function HomePage() {
  const school = useOnboardingStore((state) => state.school);

  return (
    <div className="flex h-full items-center justify-center">
      <p className="text-sm text-gray-60">{school?.name ?? "홈"} 메인 스톱워치 화면 (준비중)</p>
    </div>
  );
}

export default HomePage;
