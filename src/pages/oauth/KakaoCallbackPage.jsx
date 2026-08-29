import { useEffect, useRef, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { loginWithKakao } from "../../api/auth";
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
    const code = searchParams.get("code");
    if (!code || requestedRef.current) return;
    requestedRef.current = true;

    loginWithKakao(code)
      .then(({ accessToken, isNewUser, school, college, department }) => {
        setAuth(accessToken);

        if (isNewUser) {
          navigate("/onboarding/school", { replace: true });
          return;
        }

        hydrateOnboarding({ school, college, department });
        navigate("/home", { replace: true });
      })
      .catch(() => setIsError(true));
  }, [searchParams, navigate, setAuth, hydrateOnboarding]);

  if (isError) {
    return <EmptyState message="카카오 로그인에 실패했습니다." />;
  }

  return <LoadingState />;
}

export default KakaoCallbackPage;
