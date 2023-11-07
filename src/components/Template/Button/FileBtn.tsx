import { supabase } from "@/lib/supabase/supabase";
import { ChangeEvent, useState } from "react";

interface FileInputButtonProps {
  onfileUrlChange: (stringId: string) => void;
}

export default function FileInputButton({onfileUrlChange}: FileInputButtonProps) {
  const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files![0];
    console.log(file);
    // const safeName = encodeURIComponent(file.name);// 한글이름 안되는 이슈
    // console.log(safeName);
    if (file) {
      const { data, error } = await supabase.storage
        .from("company")
        .upload(file.name, file);

      if (error) {
        console.log(error.message);
    } else {
        console.log(data);
        onfileUrlChange(data.path);
    }
    }
  };

  return (
    <div className="mt-1">
      <input
        type="file"
        name="file"
        id="file"
        onChange={handleFileChange}
        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
      />
    </div>
  );
}
