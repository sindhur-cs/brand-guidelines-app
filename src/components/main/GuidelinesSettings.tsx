import { Upload } from "lucide-react"
import { useRef } from "react"

const GuidelinesSettings = () => {
  const inputFileElement = useRef(null);

  return (
    <div className="w-[30vw] flex flex-col p-8 border-l-2 border-green-light items-start">
        <div className="text-xl font-medium">Settings</div>
        <div className="flex flex-col w-full py-10 gap-10">
            <div className="flex flex-col gap-2.5 w-full">
                <label className="text-sm" htmlFor="brand-guidelines-field">
                    Brand Guideline name
                </label>
                <input id="brand-guidelines-field" className="p-2 border-2 border-green-light rounded-lg" />
            </div>
            <div className="flex flex-col gap-2.5 w-full">
                <label className="text-sm" htmlFor="brand-guidelines-image-field">
                    Brand Guideline image
                </label>
                <input id="brand-guidelines-image-field" type="file" hidden ref={inputFileElement}/>
                <div className="flex flex-col gap-2 items-center justify-center border-2 border-green-light w-full h-40 rounded-xl cursor-pointer">
                    <Upload/>
                    <div className="text-xs flex items-center">
                        Drag a file or click to upload
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-2.5 w-full">
                <label className="text-sm" htmlFor="brand-guidelines-description-field">
                    Brand Guideline Description
                </label>
                <textarea id="brand-guidelines-description-field" className="border-2 border-green-light p-2 rounded-lg"/>
            </div>
        </div>
    </div>
  )
}

export default GuidelinesSettings