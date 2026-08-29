# Sin:Time
> *신촌을 더욱 🔥 불타게 🔥 만들어주는 서비스*
<br>


<img width="1920" height="1080" alt="SinTime" src="https://github.com/user-attachments/assets/cf80a8e2-f01f-42a1-b7a7-a8353b9123b0" />

### ⭐️ 서비스 소개

본 서비스는 대학생들의 개인 공부 시간에 지역 기반의 랭킹 시스템과 실질적인 상권 혜택을 결합한 오프라인 연계형 학습 동기부여 플랫폼 **Sin:Time**입니다.
<br>
게임을 하듯 즐겁게 동기부여를 받고, 축적된 공부 기록으로 신촌 대학가 제휴 혜택까지 챙기는 똑똑한 갓생 라이프스타일을 제안합니다.

---


### 🌐 핵심 기능
- ⏰ **홈화면 (개인 타이머):** 화면 상단에 유저의 소속 학교 및 학과 정보를 고정하여 소속감을 줍니다. 화면 중앙에는 직관적으로 시간을 측정할 수 있는 커다란 스톱워치를 배치합니다.
- 🏫 **나의 학교 (내부 랭킹):** 우리 학교 내의 단과대별 순위, 학과별 경쟁 현황을 보여주는 랭킹 보드입니다. 개인 순위뿐만 아니라 단체의 누적 공부 시간을 합산하여 보여줍니다.
- 🏘️ **타학교 탭 (외부 경쟁):** 신촌 지역 지도를 배경으로 깔거나, 중앙에서 원형으로 퍼져나가는 노드 형태로 각 대학을 시각화합니다. 특정 학교를 클릭하면 해당 학교의 현재 총 공부 시간과 현황을 엿볼 수 있습니다.
- 💸 **제휴 혜택 (리워드):** 이번 달 제휴를 맺은 스터디 카페나 상점 목록을 띄워줍니다. "현재 OOO 스터디카페에서 연세대 15명 공부 중"과 같은 실시간 현황을 보여주고, 누적 1등 학교나 학과에게 '제휴 업체 10% 할인 쿠폰'을 지급하는 실질적인 보상 시스템입니다.
- 👤 **마이페이지:** 계정 정보 수정, 로그인/로그아웃 기능과 함께 전체 제휴 업체들의 상세 정보와 위치를 확인할 수 있는 메뉴를 제공합니다.


---

### 💻 기술 스택


| Plan / Design | Backend | Frontend |
| :---: | :---: | :---: |
| <img src="https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white" /> | (추가 예정) | <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black" /> <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" /> <br> <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" /> <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" /> <br> <img src="https://img.shields.io/badge/Zustand-433E38?style=for-the-badge&logo=react&logoColor=white" /> <img src="https://img.shields.io/badge/TanStack-FF4154?style=for-the-badge&logo=reactquery&logoColor=white" /> <br> <img src="https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" /> <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" /> <br> <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" /> |


---

### 👥 팀원 소개

<table>
  <tr align="center">
    <th>박성찬</th>
    <th>신지민</th>
    <th>이정준</th>
    <th>권보미</th>
    <th>최지우</th>
    <th>피윤혁</th>
  </tr>
  <tr align="center">
    <td><a href="https://github.com/matia0523">@matia0523</a></td>
    <td><a href="https://github.com/TuttoShin">@TuttoShin</a></td>
    <td><a href="https://github.com/jngjnl1812">@jngjnl1812</a></td>
    <td><a href="https://github.com/bomee1123">@bomee1123</a></td>
    <td><a href="https://github.com/jui-ced">@jui-ced</a></td>
    <td><a href="https://github.com/Yun-pix5">@Yun-pix</a></td>
  </tr>
  <tr align="center">
    <td><code>PM</code></td>
    <td><code>FE</code></td>
    <td><code>FE</code></td>
    <td><code>BE</code></td>
    <td><code>BE</code></td>
    <td><code>BE</code></td>
  </tr>
  <tr align="center">
    <td>
      UI 디자인<br>
      기획 총괄
    </td>
    <td>
      상태 관리<br>
      API 연동<br>
      배포 환경 구축
    </td>
    <td>
      컴포넌트 제작<br>
      페이지 UI 구현
    </td>
    <td>
      추후작성
    </td>
    <td>
      추후작성
    </td>
    <td>
      추후작성
    </td>
  </tr>
</table>

---

### 📋 폴더 구조

- **Frontend**
```
frontend/
├── src/
│   ├── api/          # 비동기 API 요청 모듈   
│   ├── components/   # 페이지별 UI 컴포넌트
│   ├── constants/    # 학교 이름 등 변하지 않는 상수 모음
│   ├── hooks/        # TanStack Query Custom Hooks 및 재사용 커스텀 훅
│   ├── pages/        # 라우팅 기반 주요 화면 페이지
│   ├── store/        # Zustand 기반 클라이언트 전역 상태 스토어
│   ├── lib/          # 범용 유틸리티 함수
│   ├── App.jsx       # 최상위 라우팅 및 앱 진입 컴포넌트
│   └── main.jsx      # React 엔트리 포인트 설정
├── public/           # icons, images 
├── index.html  
├── vite.config.js   
├── package.json      
└── README.md
```

- **Backend** 
```
backend/                                                                                                                          
  │                                                                                                                                                              
  ├── BackendApplication.java          # 메인 진입점                                                                                                             
  │                                                                                                                                                              
  ├── domain/                          # 기능별 패키지 (신규 스타일)                                                                                             
  │   ├── auth/                        # 토큰 재발급                                                                                                             
  │   │   ├── controller/AuthController.java   (POST /api/auth/refresh)                                                                                          
  │   │   ├── service/AuthService.java                                                                                                                           
  │   │   └── dto/ (RefreshRequest, RefreshResponse)                                                                                                             
  │   │                                                                                                                                                          
  │   ├── user/                        # 온보딩 · 내 정보                                                                                                        
  │   │   ├── entity/User.java                                                                                                                                   
  │   │   ├── repository/UserRepository.java                                                                                                                     
  │   │   ├── controller/UserController.java   (school/college/department PATCH, summary)                                                                        
  │   │   ├── service/UserService.java                                                                                                                           
  │   │   └── dto/ (SchoolUpdateRequest, CollegeUpdateRequest, DepartmentUpdateRequest, UserMeSummaryResponse)                                                   
  │   │                                                                                                                                                          
  │   ├── school/                      # 학교/단과대/학과 마스터 데이터                                                                                          
  │   │   ├── entity/ (School, College, Department)                                                                                                              
  │   │   ├── repository/                                                                                                                                        
  │   │   ├── controller/ (SchoolCatalogController - 조회, AdminSchoolController - 관리자 등록)                                                                  
  │   │   ├── service/SchoolCatalogService.java  
  │   │   ├── config/SchoolCatalogInitializer.java   (서버 시작시 학교 5개 자동 시딩)                                                                            
  │   │   └── dto/ (SchoolResponse, CollegeResponse, DepartmentResponse + Create 요청들)                                                                         
  │   │                                                                                                                                                          
  │   ├── schoolstat/                  # 학교별 실시간 통계 (타학교 탭용, 목업)                                                                                  
  │   │   └── SchoolStudyStat.java, Repository                                                                                                                   
  │   │                                                                                                                                                          
  │   ├── partner/                     # 제휴처 엔티티                                                                                                           
  │   │   └── Partner.java, PartnerRepository.java                                                                                                               
  │   │                                                                                                                                                          
  │   └── mypage/                      # 마이페이지                                                                                                              
  │       ├── controller/MyPageController.java                                                                                                                   
  │       ├── service/MyPageService.java                                                                                                                         
  │       └── dto/ (MyPageResponse, MyPageProfileResponse, MyPageStudyRecordResponse)                                                                            
  │                                                                                                                                                              
  ├── controller / service / repository / dto / entity   # 평평한 구조 (기존 스타일)                                                                             
  │   ├── HealthController, DevAuthController(로컬 전용), TestDataController(테스트 시더)                                                                        
  │   ├── TimerController/Service          — 타이머 start/pause/resume/stop, StudyRecord 엔티티                                                                  
  │   ├── RankingController/Service        — 학교/단과대/학과/개인 랭킹 + 홈 요약                                                                                
  │   ├── SchoolOverviewController/Service — "내 학교" 개요(시즌 하드코딩 포함)                                                                                  
  │   ├── UserStatsController/Service      — 스터디 기록 통계                                                                                                    
  │   ├── OtherSchoolController/Service    — 타학교 탭                                                                                                           
  │   ├── PartnerController/Service        — 제휴 탭
  │   └── config/SampleDataInitializer.java — 학교/제휴처 목업 자동 시딩                                                                                         
  │                                                                                                                                                              
  └── global/                          # 공통 인프라                                                                                                             
      ├── config/          — SecurityConfig, CorsConfig, SwaggerConfig, JpaAuditingConfig                                                                        
      ├── security/                                                                                                                                              
      │   ├── jwt/         — JwtTokenProvider, JwtAuthenticationFilter 등                                                                                        
      │   ├── oauth2/      — 카카오 로그인 (CustomOAuth2UserService, SuccessHandler 등)                                                                          
      │   ├── admin/       — 관리자 API 키 검증 (AdminKeyFilter)                                                                                                 
      │   └── AuthUser.java                                                                                                                                      
      ├── exception/       — BusinessException, ErrorCode, GlobalExceptionHandler                                                                                
      └── common/          — ApiResponse(공통 응답 포맷), BaseTimeEntity
```

---

### ⌨️ 개발 환경에서의 실행 방법


---

### 🚀 배포 링크

https://sinchonthon-team6.vercel.app/ 
