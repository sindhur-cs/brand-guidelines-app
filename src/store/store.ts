// 
// array of sections
// sectionVisibility
// toggle Visibility
// push section into array method

import { create } from "zustand";

interface storeType {
    sections: string[],
    sectionVisibility: boolean,
    currentSection: string,
    addSectionVisibility: () => void,
    removeSectionVisibility: () => void,
    pushSection: (sectionTitle: string) => void,
    setCurrentSection: (sectionTitle: string) => void
};

const useStore = create<storeType>()((set) => ({
    sections: [],
    sectionVisibility: false,
    currentSection: "",
    addSectionVisibility: () => set(() => ({ sectionVisibility: true })),
    removeSectionVisibility: () => set(() => ({ sectionVisibility: false })),
    pushSection: (sectionTitle: string) => set((state) => ({ sections: [...state.sections, sectionTitle] })),
    setCurrentSection: (sectionTitle: string) => set(() => ({ currentSection: sectionTitle }))
}));

export default useStore;