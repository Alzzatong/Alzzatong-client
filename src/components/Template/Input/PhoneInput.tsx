import React, { useState, useEffect, useRef } from "react";

interface PhoneNumberInputProps {
  onPhoneNumberChange: (phoneNumber: string) => void;
  phone1?: string;
  phone2?: string;
  phone3?: string;
  reset: boolean;
  setReset: (reset: boolean) => void;
}

export default function PhoneNumberInput({onPhoneNumberChange,
  phone1, phone2, phone3, reset, setReset
 }: PhoneNumberInputProps) {
  const [phoneNumber1, setPhoneNumber1] = useState<string>(phone1 || "");
  const [phoneNumber2, setPhoneNumber2] = useState<string>(phone2 || "");
  const [phoneNumber3, setPhoneNumber3] = useState<string>(phone3 || "");

  const inputRef2 = useRef<HTMLInputElement>(null);
  const inputRef3 = useRef<HTMLInputElement>(null);

   // reset prop이 변경될 때마다 전화번호 상태를 초기화합니다.
  useEffect(() => {
    if (reset) {
      setPhoneNumber1("");
      setPhoneNumber2("");
      setPhoneNumber3("");
      setReset(false)
    }
  }, [reset]);

  useEffect(() => {
    const fullPhoneNumber = `${phoneNumber1}-${phoneNumber2}-${phoneNumber3}`;
    onPhoneNumberChange(fullPhoneNumber);
  }, [phoneNumber1, phoneNumber2, phoneNumber3]);

  const handleChange1 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber1(e.target.value);
    if (e.target.value.length >= 3) {
      inputRef2.current?.focus();
    }
  };

  const handleChange2 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber2(e.target.value);
    if (e.target.value.length >= 4) {
      inputRef3.current?.focus();
    }
  };

  const handleChange3 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber3(e.target.value);
  };

  return (
    <div className="w-1/2 relative mt-2 rounded-md shadow-sm">
      <div className="flex mt-1 justify-between">
        <input
          type="tel"
          id="phoneNumber1"
          name="phoneNumber1"
          defaultValue={phoneNumber1}
          className="ring-1 ring-gray-400 block w-full p-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          onBlur={handleChange1}
          pattern="[0-9]{3}"
          required // 반드시 채워져있어야 한다는 속성
        />
        <div className="w-auto flex items-center justify-center mx-2">-</div>

        <input
          type="tel"
          id="phoneNumber2"
          name="phoneNumber2"
          defaultValue={phoneNumber2}
          className="ring-1 ring-gray-400 block w-full p-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          onBlur={handleChange2}
          pattern="[0-9]{4}"
          required
          ref={inputRef2}
        />
        <div className="w-auto flex items-center justify-center mx-2">-</div>

        <input
          type="tel"
          id="phoneNumber3"
          name="phoneNumber3"
          defaultValue={phoneNumber3}
          className="ring-1 ring-gray-400 block w-full p-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          onBlur={handleChange3}
          pattern="[0-9]{4}"
          maxLength={4}
          required
          ref={inputRef3}
        />
      </div>
    </div>
  );
}
