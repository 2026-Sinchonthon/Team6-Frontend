// 기기 상태바(노치) 영역 + 디자인 상단 여백을 확보하는 스페이서
// 실기기에서 상태바와 콘텐츠가 겹치지 않도록 env(safe-area-inset-top)만큼 추가로 띄운다

function SafeAreaTop() {
  return <div className="shrink-0 pt-[calc(env(safe-area-inset-top)_+_60px)]" />;
}

export default SafeAreaTop;
