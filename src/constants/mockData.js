// 다른 학교(신촌 리그) 지도 화면의 지도 이미지 위 픽셀 좌표/색상 — 실제 위경도로는 계산할 수 없는
// 디자인 전용 값이라 schoolId(constants/schools.js의 SCHOOLS[].id)별로 고정해서 보관한다.
// 순위/누적시간/실시간 인원 등 동적인 값은 GET /api/other-schools 응답으로 대체한다.
export const SCHOOL_MAP_LAYOUT = {
  ewha: {
    glow: "0px 0px 60px 60px #a2caad",
    position: { top: "437px", left: "calc(83.33% - 15px)" },
    popupPosition: { top: "191px", left: "39px" },
  },
  hongik: {
    glow: "0px 0px 60px 20px #1833db",
    position: { top: "635px", left: "40px" },
    popupPosition: { top: "315px", left: "20px" },
  },
  sogang: {
    glow: "0px 0px 40px 20px #f33",
    position: { top: "693px", left: "calc(66.67% + 32px)" },
    popupPosition: { top: "373px", left: "90px" },
  },
  yonsei: {
    glow: "0px 0px 60px 20px #9fb8d6",
    position: { top: "344px", left: "calc(66.67% - 8px)" },
    popupPosition: { top: "442px", left: "90px" },
  },
  myongji: {
    glow: "0px 0px 20px 20px #abc3de",
    position: { top: "139px", left: "24px" },
    popupPosition: { top: "237px", left: "8px" },
  },
};

export const COUPON_CATEGORIES = [
  { value: "all", label: "전체" },
  { value: "study-cafe", label: "스터디카페" },
  { value: "food-cafe", label: "식당/카페" },
  { value: "print", label: "프린트" },
];

export const MOCK_COUPONS = [
  {
    id: "zaksim-sinchon",
    category: "study-cafe",
    name: "작심스터디카페 신촌숲길점",
    image: "/images/partnership/venue-zaksim.png",
    discount: "시간권 20% 할인",
    status: "현재 홍익대 15명 열공 중",
    mapUrl: "https://kko.to/F5kDJL11e2",
  },
  {
    id: "eagle-cafe",
    category: "food-cafe",
    name: "독수리다방",
    image: "/images/partnership/venue-eagle.jpg",
    discount: "1위 학교 음료 15%",
    status: "현재 신촌 대학생 42명 집중 중",
    mapUrl: "https://kko.to/s-46CSdkKC",
  },
  {
    id: "mibundang-sinchon",
    category: "food-cafe",
    name: "미분당 신촌본점",
    image: "/images/partnership/venue-mibundang.jpg",
    discount: "결제 금액 5% 할인",
    mapUrl: "https://kko.to/1ns4xGtAjx",
    status: "Sin:Time 유저 누구나 상시 혜택",
  },
];
