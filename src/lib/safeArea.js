// 기기 상태바(노치) 영역 + 디자인 상단 여백(60px)을 확보하는 padding-top 클래스
// 페이지 루트 엘리먼트에 배경색과 함께 적용해서, 배경이 안전영역까지 이어지도록 한다
export const SAFE_AREA_TOP = "pt-[calc(env(safe-area-inset-top)_+_60px)]";
