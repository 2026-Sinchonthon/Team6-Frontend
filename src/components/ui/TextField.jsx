// 폼에서 재사용하는 기본 텍스트 입력 필드 (값이 채워지면 배경이 흰색으로 바뀐다)

function TextField({ label, value, onChange, placeholder, className = "", ...props }) {
  return (
    <div className={`flex w-full flex-col gap-3 ${className}`}>
      {label && <p className="text-sm font-bold text-black">{label}</p>}
      <input
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`h-12 w-full rounded-2xl border border-gray-20 px-5 py-2.5 text-base font-medium text-black outline-none transition-colors placeholder:font-normal placeholder:text-gray-60 focus:border-red-40 focus:bg-red-05 ${
          value ? "bg-white" : "bg-gray-05"
        }`}
        {...props}
      />
    </div>
  );
}

export default TextField;
