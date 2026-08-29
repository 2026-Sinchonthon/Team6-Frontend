// 시간/순위 등을 강조하는 작은 빨간 배지 (여러 화면에서 재사용)

function Badge({ children, className = "" }) {
  return (
    <span className={`rounded bg-red-40 px-2 py-1 text-xs font-medium text-white ${className}`}>{children}</span>
  );
}

export default Badge;
