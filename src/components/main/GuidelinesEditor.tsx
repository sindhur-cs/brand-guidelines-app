import useStore from "../../store/store"

const GuideEditor = () => {
  const currentSection = useStore((state) => state.currentSection);

  return (
    <div className="w-[70vw] flex justify-center">
      {currentSection === "" && <div className="flex flex-col gap-1.5 py-20 items-center">
        <h3 className="text-xl">There is no content in your brand guideline yet.</h3>
        <p className="text-gray-500">Add content by clicking the "Add Section" button. Then add your content to the section.</p>
      </div>}
      <div className="text-2xl font-semibold p-10 text-green-dark">
        {currentSection}
      </div>
    </div>
  )
}

export default GuideEditor