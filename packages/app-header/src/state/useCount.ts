import {create} from "zustand";

interface IProps {
    bears: number;
    increasePopulation: () => void;
    removeAllBears: () => void;
}

export const useBearStore = create<IProps>((set) => ({
    bears: 2,
    increasePopulation: () => set((state: any) => ({bears: state.bears + 1})),
    removeAllBears: () => set({bears: 0}),
}))
