import { useState } from "react";
import { COUPON_CATEGORIES } from "../../constants/mockData";
import { useCouponsQuery } from "../../hooks/useMockQueries";
import FilterChip from "../../components/ui/FilterChip";
import CouponCard from "../../components/ui/CouponCard";
import { SAFE_AREA_TOP } from "../../lib/safeArea";

function PartnershipPage() {
  const [category, setCategory] = useState("all");
  const { data: coupons = [] } = useCouponsQuery();

  const visibleCoupons =
    category === "all" ? coupons : coupons.filter((coupon) => coupon.category === category);

  return (
    <div className={`flex flex-col gap-6 bg-white px-5 pb-10 ${SAFE_AREA_TOP}`}>
      <div className="flex items-center justify-between">
        <h1 className="text-2xl leading-9 font-bold text-black">제휴 혜택</h1>
        <button
          type="button"
          className="flex h-[30px] items-center justify-center rounded-lg bg-black px-2 text-xs font-bold text-white"
        >
          내 쿠폰함
        </button>
      </div>

      <div className="relative flex items-center gap-5 overflow-hidden rounded-xl border border-[#d9d9d9] bg-red-25 px-6 py-4">
        <div className="flex flex-col gap-1">
          <p className="text-sm text-white">이번 달 신촌 리그 1위 학교 혜택 🏆</p>
          <p className="text-20 tracking-bold font-bold text-white">
            신촌 상권 제휴업체 연합
            <br />
            무제한 20% 할인 패스
          </p>
        </div>
        <img src="/images/partnership/hero-badge.svg" alt="" className="ml-auto size-20 shrink-0" />
      </div>

      <div className="flex flex-col gap-6">
        <div className="flex gap-1.5">
          {COUPON_CATEGORIES.map((item) => (
            <FilterChip key={item.value} active={category === item.value} onClick={() => setCategory(item.value)}>
              {item.label}
            </FilterChip>
          ))}
        </div>

        <div className="flex flex-col gap-5">
          {visibleCoupons.map((coupon) => (
            <CouponCard
              key={coupon.id}
              image={coupon.image}
              name={coupon.name}
              discount={coupon.discount}
              status={coupon.status}
              onLocate={() => window.open(coupon.mapUrl, "_blank", "noopener,noreferrer")}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default PartnershipPage;
