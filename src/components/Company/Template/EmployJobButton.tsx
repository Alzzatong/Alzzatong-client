import { XMarkIcon } from "@heroicons/react/24/solid";


interface EmployJobButtonProps {
    id: number;
    removeItem: (index: number) => void;
}


export default function EmployJobButton( props : EmployJobButtonProps ) {
  const { id , removeItem } = props;
  return (
    <div>
      <button
        type="button"
        className="rounded-full bg-white px-3 py-1.5 text-sm font-medium text-blue-500 shadow-sm ring-1 ring-inset ring-blue-400 hover:bg-gray-50"
        onClick={() => removeItem(id)}
      >
        <div className="flex gap-x-1">
        구인 직무{id + 1} <XMarkIcon className="w-[18px]"/>
        </div>
      </button>
    </div>
  );
}
