import PageContainer from "./components/PageContainer";

function App() {
  return (
    <div className="flex min-h-screen justify-center bg-[#F1F3F5]">
      <div className="flex h-screen w-full max-w-120 flex-col bg-white">
        {/* Header */}

        <PageContainer>{/* 페이지 콘텐츠 */}</PageContainer>

        {/* GNB */}
      </div>
    </div>
  );
}

export default App;
