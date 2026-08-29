import { useEffect, useRef, useState } from "react";

// 폼에서 재사용하는 커스텀 드롭다운 셀렉트
function Select({ label, placeholder = "선택해주세요", value, options, onChange, className = "" }) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectedOption = options.find((option) => option.value === value);

  return (
    <div ref={containerRef} className={`flex w-full flex-col gap-3 ${className}`}>
      {label && <p className="text-sm font-bold text-black">{label}</p>}
      <div className="relative w-full">
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className={`flex h-12 w-full items-center justify-between rounded-2xl border bg-white px-5 py-2.5 text-base font-medium transition-colors ${
            isOpen ? "border-red-40 text-red-70" : "border-gray-20 text-black"
          }`}
        >
          <span className="truncate">{selectedOption ? selectedOption.label : placeholder}</span>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            className={`size-4 shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`}
          >
            <path d="M6 9l6 6 6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        {isOpen && (
          <ul className="absolute top-[calc(100%+4px)] left-0 z-20 flex w-full flex-col overflow-hidden rounded-lg border border-gray-20 bg-white shadow-lg">
            {options.map((option) => (
              <li key={option.value}>
                <button
                  type="button"
                  onClick={() => {
                    onChange?.(option.value);
                    setIsOpen(false);
                  }}
                  className="flex h-10 w-full items-center border-b border-gray-20 bg-white px-4 text-left text-sm font-medium text-gray-60 last:border-b-0 hover:bg-gray-05"
                >
                  {option.label}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Select;
