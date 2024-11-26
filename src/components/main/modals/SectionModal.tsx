import { X } from "lucide-react"
import useStore from "../../../store/store";
import { useState } from "react";

const SectionModal = () => {
  const [sectionTitle, setSectionTitle] = useState("");
  const removeSectionVisibility = useStore((state) => state.removeSectionVisibility);
  const pushSection = useStore((state) => state.pushSection);
  const setCurrentSection = useStore((state) => state.setCurrentSection);

  return (
    <div className="flex flex-col fixed w-[30vw] z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white p-10">
        <div className="flex justify-between">
            <div className="text-xl font-semibold">Add Section</div>
            <X className="w-5 h-5 cursor-pointer" onClick={() => removeSectionVisibility()}/>
        </div>
        <div className="flex flex-col gap-4 my-6">
            <label htmlFor="section-title" className="text-sm">
                Title
            </label>
            <input id="section-title" value={sectionTitle} onChange={(e) => setSectionTitle(e.target.value)} className="p-2 w-full border-green-light border-2 outline-green-dark"/>
        </div>
        <button className="bg-green-dark text-white p-3 px-6 rounded-lg self-end" onClick={() => {
            if(sectionTitle) {
                pushSection(sectionTitle);
                setSectionTitle("");
                removeSectionVisibility();
                setCurrentSection(sectionTitle);
            }
        }}>Add Section</button>
    </div>
  )
}

export default SectionModal