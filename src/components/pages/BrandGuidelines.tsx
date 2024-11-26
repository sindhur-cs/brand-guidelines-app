import { useState } from "react"
import Layout from "../layout/Layout"
import GuidelinesInput from "../main/GuidelinesInput"
import useStore from "../../store/store";
import SectionModal from "../main/modals/SectionModal";

const BrandGuidelines = () => {
  const [inputVisible, setInputVisible] = useState(false);
  const sectionVisibility = useStore((state) => state.sectionVisibility);

  return (
    <Layout>
      <div className="flex justify-between">
        <h2 className="font-semibold text-3xl">Brand Guidelines</h2>
        <button className="" onClick={() => setInputVisible(true)}>Create</button>
      </div>
      {inputVisible && <GuidelinesInput setInputVisible={setInputVisible}/>}
      {sectionVisibility && <SectionModal/>}
    </Layout>
  )
}

export default BrandGuidelines