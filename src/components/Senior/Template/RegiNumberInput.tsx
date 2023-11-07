import React, { useState, useEffect, createContext, useContext } from "react";

export const RegiNumberContext = createContext({
  firstPart: "",
  secondPart: "",
  setFirstPart: (value: string) => {},
  setSecondPart: (value: string) => {},
})


const RegiNumberInput: React.FC = () => {
  const { firstPart, secondPart, setFirstPart, setSecondPart } = useContext(RegiNumberContext);

  const [isValid, setIsValid] = useState<boolean>(true);

  const handleFirstPartChange = ( event: React.ChangeEvent<HTMLInputElement> ) => {
    setFirstPart(event.target.value);
  };

  const handleSecondPartChange = ( event: React.ChangeEvent<HTMLInputElement> ) => {
    setSecondPart(event.target.value);
  };

  useEffect(() => {
    validateInput();
  }, [firstPart, secondPart]);

  const validateInput = () => {
    if (
      !/^\d{2}(0[1-9]|1[0-2])(0[1-9]|[1-2][0-9]|3[0-1])$/.test(firstPart) ||
      !/^[1-4]\d{6}$/.test(secondPart)
    ) {
      setIsValid(false)
    } else {
      setIsValid(true);
    }
  }

  const borderColor = isValid ? "bg-white" : "bg-gray-200";

  
  

  return (

    <div>
      <label
        htmlFor="regi-number"
        className="block text-sm font-medium text-gray-700"
      >
        주민번호
      </label>
      <div className="relative mt-2 rounded-md shadow-sm">
        <div className="mt-1 flex justify-between">
          <input
            type="string"
            id="regi-number-1"
            name="regi-number-1"
            autoComplete="string"
            defaultValue="123456"
            className={`block w-full p-2 rounded-md  ${borderColor} shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm`}
            onChange={handleFirstPartChange}
            value={firstPart}
            maxLength={6}
          />
          <div className="w-auto flex items-center justify-center mx-2">-</div>
          <input
            type="string"
            id="regi-number-2"
            name="regi-number-2"
            autoComplete="string"
            defaultValue="1234567"
            className={`block w-full p-2 rounded-md ${borderColor} shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm`}
            onChange={handleSecondPartChange}
            value={secondPart}
            maxLength={7}
          />
        </div>
      </div>
    </div>
  );
}

export default RegiNumberInput;
