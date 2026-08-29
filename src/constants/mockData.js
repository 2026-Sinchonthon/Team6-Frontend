export const MOCK_RANK_STATS = {
  schoolRank: { rank: 2, totalHours: 24530 },
  collegeRank: { rank: 1, totalHours: 5120 },
  myRank: { rank: 12, cumulativeHours: 32 },
};

export const MOCK_SCHOOL_OVERVIEW = {
  competitionRound: 19,
  remainingLabel: "11일 18시간 12분",
  rank: 2,
  totalHours: 24530,
  contributionPercentile: 15,
  contributionRate: 1.7,
};

// rank는 hooks/useMockQueries.js에서 hours 합계 기준으로 계산해서 채운다 (여기엔 저장하지 않음)
export const MOCK_COLLEGE_RANKING = [
  { name: "미술대학", status: "🔥 현재 120명 집중 중", hours: 5120, trend: "up", isMine: true },
  { name: "공과대학", status: "현재 95명 집중중", hours: 4800, trend: "down" },
  { name: "경영대학", status: "현재 82명 집중중", hours: 3950, trend: "down" },
  { name: "건축도시대학", status: "현재 65명 집중중", hours: 3210, trend: "down" },
  { name: "사범대학", status: "현재 65명 집중중", hours: 2840, trend: "down" },
  { name: "사범대학", status: "현재 65명 집중중", hours: 2840, trend: "down" },
  { name: "사범대학", status: "현재 65명 집중중", hours: 2840, trend: "down" },
];

export const MOCK_DEPARTMENT_RANKING = [
  { name: "산업디자인전공", status: "🔥 현재 120명 집중 중", hours: 5120, trend: "up" },
  { name: "시각디자인전공", status: "현재 95명 집중중", hours: 4800, trend: "down", isMine: true },
  { name: "동양화과", status: "현재 82명 집중중", hours: 3950, trend: "down" },
  { name: "회화과", status: "현재 65명 집중중", hours: 3210, trend: "down" },
  { name: "섬유미술패션디자인과", status: "현재 65명 집중중", hours: 2840, trend: "down" },
  { name: "조소과", status: "현재 65명 집중중", hours: 2840, trend: "down" },
  { name: "금속조형디자인과", status: "현재 65명 집중중", hours: 2840, trend: "down" },
  { name: "목조형가구학과", status: "현재 65명 집중중", hours: 2840, trend: "down" },
];

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

export const MOCK_USER_PROFILE = {
  name: "박성찬",
  loginProvider: "카카오톡",
  loginEmail: "HongikPerson123@kakao.com",
};

export const MOCK_STUDY_RECORD = {
  departmentPercentile: 12,
  totalTime: "124h 30m",
  dailyAverage: "3h 15m",
};

export const MOCK_COLLEGE_OPTIONS = [
  { value: "engineering", label: "공과대학" },
  { value: "architecture", label: "건축도시대학" },
  { value: "business", label: "경영대학" },
  { value: "humanities", label: "문과대학" },
  { value: "law", label: "법과대학" },
  { value: "education", label: "사범대학" },
  { value: "art", label: "미술대학" },
];
