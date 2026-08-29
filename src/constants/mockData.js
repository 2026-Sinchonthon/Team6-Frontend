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

export const MOCK_COLLEGE_RANKING = [
  { rank: 1, name: "미술대학", status: "🔥 현재 120명 집중 중", hours: 5120, trend: "up", isMine: true },
  { rank: 2, name: "공과대학", status: "현재 95명 집중중", hours: 4800, trend: "down" },
  { rank: 2, name: "경영대학", status: "현재 82명 집중중", hours: 3950, trend: "down" },
  { rank: 2, name: "건축도시대학", status: "현재 65명 집중중", hours: 3210, trend: "down" },
  { rank: 2, name: "사범대학", status: "현재 65명 집중중", hours: 2840, trend: "down" },
  { rank: 2, name: "사범대학", status: "현재 65명 집중중", hours: 2840, trend: "down" },
  { rank: 2, name: "사범대학", status: "현재 65명 집중중", hours: 2840, trend: "down" },
];

export const MOCK_DEPARTMENT_RANKING = [
  { rank: 1, name: "산업디자인전공", status: "🔥 현재 120명 집중 중", hours: 5120, trend: "up" },
  { rank: 2, name: "시각디자인전공", status: "현재 95명 집중중", hours: 4800, trend: "down", isMine: true },
  { rank: 2, name: "동양화과", status: "현재 82명 집중중", hours: 3950, trend: "down" },
  { rank: 2, name: "회화과", status: "현재 65명 집중중", hours: 3210, trend: "down" },
  { rank: 2, name: "섬유미술패션디자인과", status: "현재 65명 집중중", hours: 2840, trend: "down" },
  { rank: 2, name: "조소과", status: "현재 65명 집중중", hours: 2840, trend: "down" },
  { rank: 2, name: "금속조형디자인과", status: "현재 65명 집중중", hours: 2840, trend: "down" },
  { rank: 2, name: "목조형가구학과", status: "현재 65명 집중중", hours: 2840, trend: "down" },
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
