import { NavLink } from "react-router-dom";
import { SAFE_AREA_BOTTOM } from "../lib/safeArea";

// 앱 하단 공통 내비게이션 바
const NAV_ITEMS = [
  { path: "/home", label: "홈", icon: "/icons/gnb/home-active.svg" },
  { path: "/my-school", label: "내 학교", icon: "/icons/gnb/my-school.svg" },
  { path: "/other-school", label: "다른 학교", icon: "/icons/gnb/other-school.svg" },
  { path: "/partnership", label: "제휴", icon: "/icons/gnb/partnership.svg" },
  { path: "/my", label: "마이", icon: "/icons/gnb/my.svg" },
];

function BottomNav() {
  return (
    <nav className={`flex shrink-0 items-center justify-between bg-white px-5 pt-3 ${SAFE_AREA_BOTTOM}`}>
      {NAV_ITEMS.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          className="flex flex-col items-center gap-1"
        >
          {({ isActive }) => (
            <>
              <img src={item.icon} alt="" className="size-8" />
              <span className={`text-sm font-medium ${isActive ? "text-red-40" : "text-gray-30"}`}>
                {item.label}
              </span>
            </>
          )}
        </NavLink>
      ))}
    </nav>
  );
}

export default BottomNav;
