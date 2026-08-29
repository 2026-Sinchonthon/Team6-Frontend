import LoadingState from "./LoadingState";
import EmptyState from "./EmptyState";

// tanstack query 결과(isLoading/isError/data)를 화면 단에서 일관되게 처리하는 래퍼
// isEmpty로 "정상 응답이지만 표시할 데이터 없음"(빈 배열 등)을 에러와 별도로 처리한다
function QueryState({
  isLoading,
  isError,
  data,
  isEmpty,
  children,
  errorMessage = "데이터를 불러오지 못했습니다.",
  emptyMessage = "표시할 데이터가 없습니다.",
}) {
  if (isLoading) {
    return <LoadingState />;
  }

  if (isError) {
    return <EmptyState message={errorMessage} />;
  }

  const empty = typeof isEmpty === "function" ? isEmpty(data) : Boolean(isEmpty);
  if (empty) {
    return <EmptyState message={emptyMessage} />;
  }

  return children(data);
}

export default QueryState;
