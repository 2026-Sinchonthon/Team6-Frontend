// isError 또는 isEmpty(정상 응답이지만 표시할 데이터 없음) 상태를 보여주는 컴포넌트

function EmptyState({ message = "표시할 데이터가 없습니다." }) {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-[#868E96]">
      <p className="text-sm">{message}</p>
    </div>
  );
}

export default EmptyState;
