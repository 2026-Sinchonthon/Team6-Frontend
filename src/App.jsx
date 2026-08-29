import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import PageContainer from "./components/PageContainer";
import SplashPage from "./pages/onboarding/SplashPage";
import SchoolSelectPage from "./pages/onboarding/SchoolSelectPage";
import DepartmentDetailPage from "./pages/onboarding/DepartmentDetailPage";
import KakaoCallbackPage from "./pages/oauth/KakaoCallbackPage";
import HomePage from "./pages/home/HomePage";
import { SCHOOLS } from "./constants/schools";
import { getKakaoAuthorizeUrl } from "./lib/kakao";
import useAuthStore from "./store/useAuthStore";
import useOnboardingStore from "./store/useOnboardingStore";

function App() {
  const navigate = useNavigate();
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const isOnboarded = useOnboardingStore((state) => state.isOnboarded);
  const school = useOnboardingStore((state) => state.school);
  const setSchool = useOnboardingStore((state) => state.setSchool);
  const setCollege = useOnboardingStore((state) => state.setCollege);
  const setDepartment = useOnboardingStore((state) => state.setDepartment);
  const completeOnboarding = useOnboardingStore((state) => state.completeOnboarding);

  return (
    <div className="flex min-h-screen justify-center bg-[#F1F3F5]">
      <div className="flex h-screen w-full max-w-100.5 flex-col bg-white">
        {/* Header */}

        <PageContainer>
          <Routes>
            <Route
              path="/"
              element={
                isAuthenticated && isOnboarded ? (
                  <Navigate to="/home" replace />
                ) : (
                  <SplashPage onKakaoLogin={() => (window.location.href = getKakaoAuthorizeUrl())} />
                )
              }
            />
            <Route path="/oauth/kakao/callback" element={<KakaoCallbackPage />} />
            <Route
              path="/onboarding/school"
              element={
                <SchoolSelectPage
                  onNext={(schoolId) => {
                    setSchool(SCHOOLS.find((candidate) => candidate.id === schoolId));
                    navigate("/onboarding/department");
                  }}
                />
              }
            />
            <Route
              path="/onboarding/department"
              element={
                <DepartmentDetailPage
                  school={school}
                  onChangeSchool={() => navigate("/onboarding/school")}
                  onSubmit={({ college, department }) => {
                    setCollege(college);
                    setDepartment(department);
                    completeOnboarding();
                    navigate("/home");
                  }}
                />
              }
            />
            <Route path="/home" element={<HomePage />} />
          </Routes>
        </PageContainer>

        {/* GNB */}
      </div>
    </div>
  );
}

export default App;
