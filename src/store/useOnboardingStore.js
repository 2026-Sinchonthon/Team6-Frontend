import { create } from "zustand";
import { persist } from "zustand/middleware";

const initialState = {
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
      hydrate: ({ schoolId, schoolName, collegeId, collegeName, departmentId, departmentName }) =>
        set({
          school: schoolId ? { id: schoolId, name: schoolName } : null,
          college: collegeId ? { id: collegeId, name: collegeName } : null,
          department: departmentId ? { id: departmentId, name: departmentName } : null,
          isOnboarded: Boolean(schoolId),
        }),
    }),
    {
      name: "syntime-onboarding",
      partialize: (state) => ({
        school: state.school,
        college: state.college,
        department: state.department,
        isOnboarded: state.isOnboarded,
      }),
    },
  ),
);

export default useOnboardingStore;
