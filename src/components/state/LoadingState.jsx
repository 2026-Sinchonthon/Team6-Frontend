// isLoading 상태일 때 보여주는 로딩 스피너 컴포넌트

function LoadingState() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div
        role="status"
        aria-label="로딩 중"
        className="h-8 w-8 animate-spin rounded-full border-4 border-red-25/20 border-t-red-25"
      />
    </div>
  );
}

export default LoadingState;
