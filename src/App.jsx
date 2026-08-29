import { Navigate, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import PageContainer from "./components/PageContainer";
import BottomNav from "./components/BottomNav";
import SplashPage from "./pages/onboarding/SplashPage";
import SchoolSelectPage from "./pages/onboarding/SchoolSelectPage";
import DepartmentDetailPage from "./pages/onboarding/DepartmentDetailPage";
import KakaoCallbackPage from "./pages/oauth/KakaoCallbackPage";
import HomePage from "./pages/home/HomePage";
import MySchoolPage from "./pages/mySchool/MySchoolPage";
import OtherSchoolPage from "./pages/otherSchool/OtherSchoolPage";
import PartnershipPage from "./pages/partnership/PartnershipPage";
import MyPage from "./pages/mypage/MyPage";
import AccountSettingsPage from "./pages/mypage/AccountSettingsPage";
import { SCHOOLS } from "./constants/schools";
import useAuthStore from "./store/useAuthStore";
import useOnboardingStore from "./store/useOnboardingStore";
import { useUpdateSchoolMutation } from "./hooks/useUserQueries";

const GNB_PATHS = ["/home", "/my-school", "/other-school", "/partnership", "/my"];

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const showBottomNav = GNB_PATHS.includes(location.pathname);
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const isOnboarded = useOnboardingStore((state) => state.isOnboarded);
  const school = useOnboardingStore((state) => state.school);
  const setSchool = useOnboardingStore((state) => state.setSchool);
  const setCollege = useOnboardingStore((state) => state.setCollege);
  const setDepartment = useOnboardingStore((state) => state.setDepartment);
  const completeOnboarding = useOnboardingStore((state) => state.completeOnboarding);
  const updateSchoolMutation = useUpdateSchoolMutation();

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
                  <SplashPage
                    onKakaoLogin={() =>
                      (window.location.href = `${import.meta.env.VITE_API_BASE_URL}/oauth2/authorization/kakao`)
                    }
                  />
                )
              }
            />
            <Route path="/oauth/callback" element={<KakaoCallbackPage />} />
            <Route
              path="/onboarding/school"
              element={
                <SchoolSelectPage
                  onNext={(schoolId) => {
                    const selected = SCHOOLS.find((candidate) => candidate.id === schoolId);
                    setSchool(selected);

                    if (selected?.remoteId) updateSchoolMutation.mutate(selected.remoteId);

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
            <Route path="/my-school" element={<MySchoolPage />} />
            <Route path="/other-school" element={<OtherSchoolPage />} />
            <Route path="/partnership" element={<PartnershipPage />} />
            <Route
              path="/my"
              element={
                <MyPage
                  onEditProfile={() => navigate("/onboarding/department")}
                  onOpenAccountSettings={() => navigate("/my/account")}
                />
              }
            />
            <Route
              path="/my/account"
              element={
                <AccountSettingsPage onBack={() => navigate("/my")} onLoggedOut={() => navigate("/")} />
              }
            />
          </Routes>
        </PageContainer>

        {showBottomNav && <BottomNav />}
      </div>
    </div>
  );
}

export default App;
