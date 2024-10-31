import AdmissionChart from "./AdmissionChart"


const AdmissionChartContainer = () => {
  return (
    <div className="w-full flex flex-wrap gap-2">
      <div className="flex justify-between items-center w-full">
        <h1 className="font-semibold text-gray-600">Admission History</h1>
        <div className="flex gap-4">
          <div className="flex flex-col">
            <label htmlFor="options" className="block text-xs font-light text-gray-700 mb-1">From</label>
            <select
              id="options"
              className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm border-none outline-none text-xs"
            >
              <option value="option1">Option 1</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label htmlFor="options" className="block text-xs font-light text-gray-700 mb-1">To</label>
            <select
              id="options"
              className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm border-none outline-none text-xs"
            >
              <option value="option1">Option 1</option>
            </select>
          </div>
        </div>
      </div>
      <AdmissionChart />
    </div>
  )
}

export default AdmissionChartContainer