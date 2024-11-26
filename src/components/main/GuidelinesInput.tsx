import { X } from "lucide-react"
import GuidelinesEditor from "./GuidelinesEditor"
import GuidelinesSettings from "./GuidelinesSettings"

const GuidelinesInput = ({ setInputVisible } : { setInputVisible: React.Dispatch<React.SetStateAction<boolean>> }) => {
  return (
    <div className="absolute top-0 left-0">
        <div className="w-screen flex items-center bg-green-light px-10">
            <div className="flex gap-5 items-center p-5 w-full">
                <X className="h-5 w-5 cursor-pointer" onClick={() => setInputVisible(false)}/>
                <div className="text-xl font-medium">Create</div>
            </div>
            <button className="bg-green-dark text-white py-2.5 px-5 rounded-md">Save</button>
        </div>
        <div className="flex max-h-screen bg-white">
            <GuidelinesEditor/>
            <GuidelinesSettings/>
        </div>
    </div>
  )
}

export default GuidelinesInput