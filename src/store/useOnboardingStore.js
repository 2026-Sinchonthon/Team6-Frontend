import { create } from "zustand";
import { persist } from "zustand/middleware";
import { SCHOOLS } from "../constants/schools";

const initialState = {
  name: null,
  school: null,
  college: null,
  department: null,
  isOnboarded: false,
};

const useOnboardingStore = create(
  persist(
    (set) => ({
      ...initialState,

      setSchool: (school) => set({ school, college: null, department: null }),
      setCollege: (college) => set({ college, department: null }),
      setDepartment: (department) => set({ department }),
      completeOnboarding: () => set({ isOnboarded: true }),
      resetOnboarding: () => set(initialState),
      // TODO: 응답에 실제 카카오 닉네임 필드명이 name이 아니면 여기만 맞춰서 고치기
      // school/college/department는 어느 경로로 채워지든 항상 { id, name } 형태로 통일한다
      // (수동 온보딩 경로는 App.jsx/DepartmentDetailPage에서, 여기(백엔드 요약 응답)에서는 아래에서 맞춘다)
      hydrate: ({ name, schoolId, schoolName, collegeId, collegeName, departmentId, departmentName }) => {
        const localSchool = SCHOOLS.find(
          (candidate) => candidate.remoteId === schoolId || candidate.name === schoolName,
        );

        set({
          name: name ?? null,
          school: schoolId ? (localSchool ?? { id: schoolId, name: schoolName }) : null,
          college: collegeId ? { id: collegeId, name: collegeName } : null,
          department: departmentId ? { id: departmentId, name: departmentName } : null,
          isOnboarded: Boolean(schoolId),
        });
      },
    }),
    {
      name: "syntime-onboarding",
      partialize: (state) => ({
        name: state.name,
        school: state.school,
        college: state.college,
        department: state.department,
        isOnboarded: state.isOnboarded,
      }),
    },
  ),
);

export default useOnboardingStore;
