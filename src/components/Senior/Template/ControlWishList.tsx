import React, { FC, useState } from "react";


export default function ControlWishList() {
    const [fields, setFields] = useState([""]);
    
    const handleAdd = () => {
        if (fields.length >= 3) {
          alert("더 이상 추가할 수 없습니다!");
        } else {
          setFields([...fields, ""]);
        }
      };
      //희망근무지 파트 제거
      const handleRemove = (index: number) => {
        if (fields.length === 1) {
          alert("삭제 불가. 최소 희망근무지 1개가 입력되어야 합니다.");
        } else {
          setFields(fields.filter((_, i) => i !== index));
        }
      };

    return {fields, handleAdd, handleRemove};
}