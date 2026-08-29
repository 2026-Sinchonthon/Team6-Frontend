// remoteId: 백엔드 schoolId(숫자, 고정값)와의 매핑. id는 프론트 내부 전용 slug(지도 좌표 키 등)이며
// 백엔드 API에 보낼 때는 반드시 remoteId를 사용해야 한다.
export const SCHOOLS = [
  {
    id: "sogang",
    remoteId: 2,
    name: "서강대학교",
    shortName: "서강대",
    englishName: "Sogang University",
    logo: "/images/schools/sogang.jpg",
  },
  {
    id: "myongji",
    remoteId: 4,
    name: "명지대학교",
    shortName: "명지대",
    englishName: "Myongji University",
    logo: "/images/schools/myongji.png",
  },
  {
    id: "yonsei",
    remoteId: 1,
    name: "연세대학교",
    shortName: "연세대",
    englishName: "Yonsei University",
    logo: "/images/schools/yonsei.png",
  },
  {
    id: "hongik",
    remoteId: 5,
    name: "홍익대학교",
    shortName: "홍익대",
    englishName: "Hongik University",
    logo: "/images/schools/hongik.png",
  },
  {
    id: "ewha",
    remoteId: 3,
    name: "이화여자대학교",
    shortName: "이화여대",
    englishName: "Ewha Womans University",
    logo: "/images/schools/ewha.png",
  },
];
