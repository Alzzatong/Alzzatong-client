import { useState } from "react";


export default function ControlOptionalList() {
    const [optionFields, setOptionFields] = useState([""]);
    
    const handleOptionAdd = () => {
        if (optionFields.length >= 5) {
          alert("더 이상 선택항목을 추가할 수 없습니다.");
        } else {
            setOptionFields([...optionFields, ""]);
        }
      };
      //선택항목 파트 제거
      const handleOptionRemove = (index: number) => {
        if (optionFields.length === 1) {
          alert("더 이상 삭제할 수 없습니다.");
        } else {
            setOptionFields(optionFields.filter((_, i) => i !== index));
        }
      };

    return {optionFields, handleOptionAdd, handleOptionRemove};
}