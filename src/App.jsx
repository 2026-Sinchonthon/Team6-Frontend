import PageContainer from "./components/PageContainer";
import SafeAreaTop from "./components/SafeAreaTop";
import SchoolSelectPage from "./pages/SchoolSelectPage";

function App() {
  return (
    <div className="flex min-h-screen justify-center bg-[#F1F3F5]">
      <div className="flex h-screen w-full max-w-100.5 flex-col bg-white">
        <SafeAreaTop />

        {/* Header */}

        <PageContainer>
          <SchoolSelectPage />
        </PageContainer>

        {/* GNB */}
      </div>
    </div>
  );
}

export default App;
