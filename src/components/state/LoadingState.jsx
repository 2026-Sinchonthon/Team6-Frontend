// isLoading 상태일 때 보여주는 로딩 스피너 컴포넌트

function LoadingState() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div
        role="status"
        aria-label="로딩 중"
        className="h-8 w-8 animate-spin rounded-full border-4 border-[#FF8080]/20 border-t-[#FF8080]"
      />
    </div>
  );
}

export default LoadingState;
