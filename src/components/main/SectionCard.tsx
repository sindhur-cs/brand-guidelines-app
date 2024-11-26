import useStore from "../../store/store"

const SectionCard = ({ section, active }: { section: string, active: boolean }) => {
  const setCurrentSection = useStore((state) => state.setCurrentSection);
  
  return (
    <div className={`p-4 w-full rounded-md ${active ? "bg-green-light" : "bg-gray-100"} cursor-pointer`} onClick={() => setCurrentSection(section)}>
        {section}
    </div>
  )
}

export default SectionCard