// 화면 전반에서 재사용하는 기본(primary) 버튼

function Button({ children, className = "", ...props }) {
  return (
    <button
      type="button"
      className={`flex h-14 w-full items-center justify-center rounded-lg bg-red-40 text-lg leading-[30px] font-bold text-white transition-colors disabled:bg-gray-20 disabled:text-gray-50 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
