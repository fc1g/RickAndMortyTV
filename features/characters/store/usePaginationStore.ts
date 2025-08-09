import { create } from 'zustand';

type State = {
  page: number;
};
type Actions = {
  nextPage: () => void;
  prevPage: () => void;
};

export const usePaginationStore = create<State & Actions>()(set => ({
  page: 1,

  nextPage: () => set(state => ({ page: state.page + 1 })),
  prevPage: () => set(state => ({ page: state.page - 1 })),
}));
