
import { ReactNode } from "react";
import { create } from "zustand";

type ModelState = {
  isOpen: boolean;
  content: ReactNode | null;
  openModal: (content: ReactNode) => void;
  closeModal: () => void;
  renderState: boolean
  changeRender: () => void
  studentRenderState: boolean
  changeStudentRender: () => void
  teacherRenderState: boolean
  changeTeacherRender: () => void,
  subjectRenderState: boolean
  changeSubjectRender:()=>void
};

const useModalStore = create<ModelState>((set) => ({
  isOpen: false,
  content: null,
  renderState: true,
  studentRenderState: true,
  teacherRenderState: true,
  subjectRenderState:true,
  openModal: (content) => set({ isOpen: true, content }),
  closeModal: () => set({ isOpen: false, content: null }),
  changeRender: () => set((state) => ({ renderState: !state.renderState })),
  changeStudentRender: () => set((state) => ({ studentRenderState: !state.studentRenderState })),
  changeTeacherRender: () => set((state) => ({ teacherRenderState: !state.teacherRenderState })),
  changeSubjectRender:()=>set((state)=>({subjectRenderState:!state.subjectRenderState}))
}));

export default useModalStore;
