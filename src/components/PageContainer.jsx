// 헤더와 GNB를 제외한 페이지 본문 영역 컴포넌트

function PageContainer({ children }) {
  return <main className="min-h-0 flex-1 overflow-y-auto">{children}</main>;
}

export default PageContainer;
