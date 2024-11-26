import { useState } from "react"
import Layout from "../layout/Layout"
import GuidelinesInput from "../main/GuidelinesInput"

const BrandGuidelines = () => {
  const [inputVisible, setInputVisible] = useState(false);

  return (
    <Layout>
      <div className="flex justify-between">
        <h2 className="font-semibold text-3xl">Brand Guidelines</h2>
        <button className="" onClick={() => setInputVisible(true)}>Create</button>
      </div>
      {inputVisible && <GuidelinesInput setInputVisible={setInputVisible}/>}
    </Layout>
  )
}

export default BrandGuidelines