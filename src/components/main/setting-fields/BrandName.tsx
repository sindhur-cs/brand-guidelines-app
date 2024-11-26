
const BrandName = () => {
  return (
    <div className="flex flex-col gap-2.5 w-full">
        <label className="text-sm" htmlFor="brand-guidelines-field">
            Brand Guideline name
        </label>
        <input id="brand-guidelines-field" className="p-2 border-2 border-green-light rounded-lg" />
    </div>
  )
}

export default BrandName