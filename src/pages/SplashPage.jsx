import KakaoLoginButton from "../components/ui/KakaoLoginButton";
import { SAFE_AREA_TOP } from "../lib/safeArea";

function SplashPage({ onKakaoLogin }) {
  return (
    <div
      className={`flex h-full flex-col items-center justify-between bg-red-40 px-5 pb-6 ${SAFE_AREA_TOP}`}
    >
      <div className="flex flex-col items-center gap-[180px]">
        <div className="flex flex-col items-center gap-8">
          <img src="/images/splash/logo-mark.svg" alt="" className="h-[211px] w-[130px]" />
          <img src="/images/splash/logo-wordmark.svg" alt="Sin:Time" className="h-[65px] w-[253px]" />
        </div>

        <p className="text-20 tracking-semibold text-center font-semibold text-white">
          각자의 자리에서, <br /> 다 함께 몰입하는 신촌의 시간
        </p>
      </div>

      <KakaoLoginButton onClick={onKakaoLogin} />
    </div>
  );
}

export default SplashPage;
