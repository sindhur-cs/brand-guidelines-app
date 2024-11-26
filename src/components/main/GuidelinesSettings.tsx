
import useStore from "../../store/store";
import SectionCard from "./SectionCard";
import BrandDescription from "./setting-fields/BrandDescription";
import BrandName from "./setting-fields/BrandName";
import FileUpload from "./setting-fields/FileUpload";

const GuidelinesSettings = () => {
  const sections = useStore((state) => state.sections);
  const addSectionVisibility = useStore((state) => state.addSectionVisibility);
  const currentSection = useStore((state) => state.currentSection);

  return (
    <div className="w-[30vw] flex flex-col p-8 border-l-2 border-green-light items-start overflow-scroll">
        <div className="text-xl font-medium">Settings</div>
        <div className="flex flex-col w-full py-10 gap-10">
            <BrandName/>
            <FileUpload/>
            <BrandDescription/>
        </div>
        <div className="w-full">
            <div className="text-xl font-medium">Sections</div>
            {/* Sections list */}
            {sections.length > 0 && <div className="w-full my-10 flex flex-col gap-4">
                {sections.map((section, index) => <SectionCard key={index} section={section} active={section === currentSection}/>)}
            </div>}
            {/* Add section */}
            <div className="relative w-full h-[2px] rounded-full bg-green-dark my-8">
                <div onClick={() => addSectionVisibility()} className="cursor-pointer flex items-center justify-center absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 h-1 w-1 bg-green-dark p-3.5 text-white rounded-full">
                    +
                </div>
            </div>
        </div>
    </div>
  )
}

export default GuidelinesSettings