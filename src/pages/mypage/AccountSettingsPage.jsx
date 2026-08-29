import useAuthStore from "../../store/useAuthStore";
import useOnboardingStore from "../../store/useOnboardingStore";
import { useMyPageProfileQuery } from "../../hooks/useMyPageQueries";
import ListItem from "../../components/ui/ListItem";
import { SAFE_AREA_TOP } from "../../lib/safeArea";

function AccountSettingsPage({ onBack, onLoggedOut }) {
  const { data: profile } = useMyPageProfileQuery();
  const clearAuth = useAuthStore((state) => state.clearAuth);
  const resetOnboarding = useOnboardingStore((state) => state.resetOnboarding);

  const handleLogout = () => {
    clearAuth();
    resetOnboarding();
    onLoggedOut?.();
  };

  return (
    <div className={`flex h-full flex-col gap-6 bg-white px-5 pb-10 ${SAFE_AREA_TOP}`}>
      <div className="relative flex items-center justify-center">
        <button type="button" onClick={onBack} className="absolute left-0 flex size-6 items-center justify-center">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="size-5 text-black">
            <path d="M15 6l-6 6 6 6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <p className="text-base font-semibold text-black">로그아웃 및 회원탈퇴</p>
      </div>

      <div className="flex flex-col gap-4">
        <p className="text-sm font-bold text-gray-60">연동된 계정 정보</p>

        <div className="flex items-center gap-4 rounded-lg border border-gray-20 bg-white px-5 py-3">
          <img src="/images/splash/kakao-icon.png" alt="" className="size-9 shrink-0 rounded-full" />
          <div className="flex flex-col items-start gap-1">
            <p className="text-base font-bold text-black">{profile?.loginProvider ?? "카카오톡"}으로 로그인됨</p>
            <p className="text-sm text-gray-60">{profile?.loginEmail}</p>
          </div>
        </div>

        <div className="border-t border-gray-20 pt-5">
          <ListItem
            onClick={handleLogout}
            label="로그아웃"
            icon={
              <span className="flex size-6 items-center justify-center rounded-lg bg-red-40">
                <svg viewBox="0 0 24 24" fill="none" stroke="white" className="size-3.5">
                  <path
                    d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            }
          />
        </div>
      </div>
    </div>
  );
}

export default AccountSettingsPage;
