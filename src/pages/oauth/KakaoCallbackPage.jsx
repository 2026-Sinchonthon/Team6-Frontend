import { useEffect, useRef, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { getMySummary } from "../../api/user";
import useAuthStore from "../../store/useAuthStore";
import useOnboardingStore from "../../store/useOnboardingStore";
import LoadingState from "../../components/state/LoadingState";
import EmptyState from "../../components/state/EmptyState";

function KakaoCallbackPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const setAuth = useAuthStore((state) => state.setAuth);
  const hydrateOnboarding = useOnboardingStore((state) => state.hydrate);
  const [isError, setIsError] = useState(false);
  const requestedRef = useRef(false);

  useEffect(() => {
    const accessToken = searchParams.get("accessToken");
    const refreshToken = searchParams.get("refreshToken");
    if (!accessToken || requestedRef.current) return;
    requestedRef.current = true;

    setAuth(accessToken, refreshToken);

    getMySummary()
      .then((summary) => {
        if (!summary.schoolId) {
          navigate("/onboarding/school", { replace: true });
          return;
        }

        hydrateOnboarding(summary);
        navigate("/home", { replace: true });
      })
      .catch(() => setIsError(true));
  }, [searchParams, navigate, setAuth, hydrateOnboarding]);

  if (isError) {
    return <EmptyState message="로그인 처리에 실패했습니다." />;
  }

  return <LoadingState />;
}

export default KakaoCallbackPage;
