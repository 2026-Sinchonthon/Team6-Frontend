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

// 다른 학교(신촌 리그) 지도 화면 — schoolId는 constants/schools.js의 SCHOOLS[].id와 매칭
export const MOCK_SINCHON_LEAGUE = [
  {
    schoolId: "ewha",
    rank: 1,
    weeklyHours: 32150,
    liveCount: 850,
    glow: "0px 0px 60px 60px #a2caad",
    position: { top: "437px", left: "calc(83.33% - 15px)" },
    popupPosition: { top: "191px", left: "39px" },
    crown: true,
  },
  {
    schoolId: "hongik",
    rank: 2,
    weeklyHours: 38900,
    liveCount: 950,
    glow: "0px 0px 60px 20px #1833db",
    position: { top: "635px", left: "40px" },
    popupPosition: { top: "315px", left: "20px" },
  },
  {
    schoolId: "sogang",
    rank: 3,
    weeklyHours: 31200,
    liveCount: 780,
    glow: "0px 0px 40px 20px #f33",
    position: { top: "693px", left: "calc(66.67% + 32px)" },
    popupPosition: { top: "373px", left: "90px" },
  },
  {
    schoolId: "yonsei",
    rank: 4,
    weeklyHours: 25800,
    liveCount: 650,
    glow: "0px 0px 60px 20px #9fb8d6",
    position: { top: "344px", left: "calc(66.67% - 8px)" },
    popupPosition: { top: "442px", left: "90px" },
  },
  {
    schoolId: "myongji",
    rank: 5,
    weeklyHours: 19400,
    liveCount: 420,
    glow: "0px 0px 20px 20px #abc3de",
    position: { top: "139px", left: "24px" },
    popupPosition: { top: "237px", left: "8px" },
  },
];

export const MOCK_COLLEGE_OPTIONS = [
  { value: "engineering", label: "공과대학" },
  { value: "architecture", label: "건축도시대학" },
  { value: "business", label: "경영대학" },
  { value: "humanities", label: "문과대학" },
  { value: "law", label: "법과대학" },
  { value: "education", label: "사범대학" },
  { value: "art", label: "미술대학" },
];
