
interface Props {
    onClick: () => void;
}

export default function SearchButton({onClick}: Props ) {
    return (
      <button
        type="button"
        className="w-2/6 rounded bg-white px-2 py-1 text-sm font-normal text-blue-400 shadow-sm ring-1 ring-inset ring-blue-300 hover:bg-gray-100"
        onClick={onClick}
      >
        찾아보기
      </button>
    );
  }
  