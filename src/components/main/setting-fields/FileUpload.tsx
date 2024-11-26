import { Upload } from "lucide-react";
import { useRef } from "react"

const FileUpload = () => {
    const inputFileElement = useRef(null);

    return (
        <div className="flex flex-col gap-2.5 w-full">
            <label className="text-sm" htmlFor="brand-guidelines-image-field">
                Brand Guideline image
            </label>
            <input id="brand-guidelines-image-field" type="file" hidden ref={inputFileElement} />
            <div onClick={() => {
                if (inputFileElement.current) {
                    const fileElement: HTMLInputElement = inputFileElement.current;
                    fileElement.click();
                }
            }} className="flex flex-col gap-2 items-center justify-center border-2 border-green-light w-full h-40 rounded-xl cursor-pointer">
                <Upload />
                <div className="text-xs flex items-center">
                    Drag a file or click to upload
                </div>
            </div>
        </div>
    )
}

export default FileUpload