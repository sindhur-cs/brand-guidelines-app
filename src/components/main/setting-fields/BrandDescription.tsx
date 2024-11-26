
const BrandDescription = () => {
  return (
    <div className="flex flex-col gap-2.5 w-full">
        <label className="text-sm" htmlFor="brand-guidelines-description-field">
            Brand Guideline Description
        </label>
        <textarea id="brand-guidelines-description-field" className="border-2 border-green-light p-2 rounded-lg"/>
    </div>
  )
}

export default BrandDescription