export default function FaxNumberInput() {
    return (
      <div className="mt-4">
        <label
          htmlFor="fax-number"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          팩스번호(선택)
        </label>
        <div className="w-1/2 relative mt-2 rounded-md shadow-sm">
          <div className="mt-1 flex justify-between">
            <input
              type="number"
              id="fax-number-1"
              name="fax-number-1"
              autoComplete="number"
              className="block w-full p-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
            <div className="w-auto flex items-center justify-center mx-2">-</div>
            <input
              type="number"
              id="fax-number-2"
              name="fax-number-2"
              autoComplete="number"
              className="block w-full p-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
            <div className="w-auto flex items-center justify-center mx-2">-</div>
            <input
              type="number"
              id="fax-number-3"
              name="fax-number-3"
              autoComplete="number"
              className="block w-full p-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
        </div>
      </div>
    );
  }
  