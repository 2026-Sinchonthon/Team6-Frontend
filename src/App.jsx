import { useState } from "react";
import PageContainer from "./components/PageContainer";
import SplashPage from "./pages/SplashPage";
import SchoolSelectPage from "./pages/SchoolSelectPage";
import DepartmentDetailPage from "./pages/DepartmentDetailPage";
import { SCHOOLS } from "./constants/schools";

function App() {
  const [step, setStep] = useState("splash");
  const [selectedSchoolId, setSelectedSchoolId] = useState(null);
  const selectedSchool = SCHOOLS.find((school) => school.id === selectedSchoolId);

  return (
    <div className="flex min-h-screen justify-center bg-[#F1F3F5]">
      <div className="flex h-screen w-full max-w-100.5 flex-col bg-white">
        {/* Header */}

        <PageContainer>
          {step === "splash" && <SplashPage onKakaoLogin={() => setStep("school")} />}
          {step === "school" && (
            <SchoolSelectPage
              onNext={(schoolId) => {
                setSelectedSchoolId(schoolId);
                setStep("department");
              }}
            />
          )}
          {step === "department" && (
            <DepartmentDetailPage
              school={selectedSchool}
              onChangeSchool={() => setStep("school")}
              onSubmit={(detail) => console.log("onboarding complete", { selectedSchool, ...detail })}
            />
          )}
        </PageContainer>

        {/* GNB */}
      </div>
    </div>
  );
}

export default App;
