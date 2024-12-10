import { ReactNode } from "react";
import { create } from "zustand";

type ModelState = {
  isOpen: boolean;
  content: ReactNode | null;
  openModal: (content: ReactNode) => void;
  closeModal: () => void;
  profitRenderState: boolean;
  changeProfitRender: () => void;
  expenseRenderState: boolean;
  changeExpenseRender: () => void;
  studentRenderState: boolean;
  changeStudentRender: () => void;
  teacherRenderState: boolean;
  changeTeacherRender: () => void;
  subjectRenderState: boolean;
  changeSubjectRender: () => void;
  totalIncome: number;
  setTotalIncome: (value: number) => void;
  totalExpense: number;
  setTotalExpense: (value: number) => void;
};

const useModalStore = create<ModelState>((set) => ({
  isOpen: false,
  content: null,
  profitRenderState: true,
  expenseRenderState: true,
  studentRenderState: true,
  teacherRenderState: true,
  subjectRenderState: true,
  totalIncome: 0,
  totalExpense: 0,
  openModal: (content) => set({ isOpen: true, content }),
  closeModal: () => set({ isOpen: false, content: null }),
  changeExpenseRender: () =>
    set((state) => ({ expenseRenderState: !state.expenseRenderState })),
  changeProfitRender: () =>
    set((state) => ({ profitRenderState: !state.profitRenderState })),
  changeStudentRender: () =>
    set((state) => ({ studentRenderState: !state.studentRenderState })),
  changeTeacherRender: () =>
    set((state) => ({ teacherRenderState: !state.teacherRenderState })),
  changeSubjectRender: () =>
    set((state) => ({ subjectRenderState: !state.subjectRenderState })),
  setTotalIncome: (value) => set(() => ({ totalIncome: value })),
  setTotalExpense: (value) => set(() => ({ totalExpense: value })),
}));

export default useModalStore;
