export default function PhoneInput() {
  return (
    <div>
      <label
        htmlFor="phone-number"
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        전화번호
      </label>
      <div className="w-1/2 relative mt-2 rounded-md shadow-sm">
        <div className="mt-1 flex justify-between">
          <input
            type="number"
            id="phone-number-1"
            name="phone-number-1"
            autoComplete="number"
            className="block w-full p-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
          <div className="w-auto flex items-center justify-center mx-2">-</div>
          <input
            type="number"
            id="phone-number-2"
            name="phone-number-2"
            autoComplete="number"
            className="block w-full p-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
          <div className="w-auto flex items-center justify-center mx-2">-</div>
          <input
            type="number"
            id="phone-number-3"
            name="phone-number-3"
            autoComplete="number"
            className="block w-full p-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>
      </div>
    </div>
  );
}
