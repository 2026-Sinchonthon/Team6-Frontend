// 카카오 소셜 로그인 버튼 (시작 화면 등에서 재사용)

function KakaoLoginButton({ children = "카카오로 시작하기", className = "", ...props }) {
  return (
    <button
      type="button"
      className={`flex h-[68px] w-full items-center justify-center gap-[50px] rounded-lg bg-white px-5 py-4 ${className}`}
      {...props}
    >
      <img src="/images/splash/kakao-icon.png" alt="" className="size-[35px] shrink-0 rounded-full" />
      <span className="text-lg leading-[30px] font-semibold text-red-70">{children}</span>
      <span aria-hidden="true" className="size-[35px] shrink-0" />
    </button>
  );
}

export default KakaoLoginButton;
