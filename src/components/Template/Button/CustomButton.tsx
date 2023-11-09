//label: 버튼 안에 들어갈 텍스트, onClick: 적용될 함수, className: 적용될 스타일
interface props {
    label: string;
    onClick: any;
    className: string;
  }
  
  export default function CustomButton({ label, onClick, className }: props) {
    return (
      <div className="flex justify-end">
        <button
          type="button"
          // className="rounded bg-indigo-50 px-2 py-1 text-xs font-semibold text-blue-600 shadow-sm hover:bg-indigo-100"
          className={className}
          onClick={onClick}
        >
          {label}
        </button>
      </div>
    );
  }
  