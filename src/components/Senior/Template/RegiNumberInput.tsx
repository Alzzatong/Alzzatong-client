import React, { useState, useEffect } from "react";

interface props {
  firstSelect: (e: React.ChangeEvent<HTMLInputElement>) => void;
  secondSelect: (e: React.ChangeEvent<HTMLInputElement>) => void;
  initialFirstPart?: string;
  initialSecondPart?: string;
}

const RegiNumberInput = ({firstSelect, secondSelect, initialFirstPart, initialSecondPart} : props) => {

  const [isValid, setIsValid] = useState<boolean>(true);

  const [firstPart, setFirstPart] = useState<string>(initialFirstPart || "");
  const [secondPart, setSecondPart] = useState<string>(initialSecondPart || "");

  const handleFirstPartChange = ( event: React.ChangeEvent<HTMLInputElement> ) => {
    setFirstPart(event.target.value);
    firstSelect(event);
  };

  const handleSecondPartChange = ( event: React.ChangeEvent<HTMLInputElement> ) => {
    setSecondPart(event.target.value);
    secondSelect(event);
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
  
  const alert = isValid ? "" : "맞는 번호를 입력해주세요.";
  
  return (
    <div>
      <label
        htmlFor="regi_number"
        className="block text-sm font-medium text-gray-700"
      >
      </label>
      <div className="relative mt-2 rounded-md shadow-sm">
        <div className="mt-1 flex justify-between">
          <input
            type="string"
            id="regi_first_num"
            name="regi_first_num"
            autoComplete="string"
            value={firstPart}
            className={`block w-full p-2 rounded-md bg-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm`}
            onChange={handleFirstPartChange}
            maxLength={6}
          />
          <div className="w-auto flex items-center justify-center mx-2">-</div>
          <input
            type="string"
            id="regi_second_num"
            name="regi_second_num"
            autoComplete="string"
            value={secondPart}
            className={`block w-full p-2 rounded-md bg-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm`}
            onChange={handleSecondPartChange}
            maxLength={7}
          />
        </div>
        <p className="text-gray-500 text-sm">{alert}</p>
      </div>
    </div>
  );
}

export default RegiNumberInput;
