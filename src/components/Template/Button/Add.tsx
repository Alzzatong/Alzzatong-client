interface Props {
  addItem: () => void;
}
export default function AddButton({addItem}: Props) {
  return (
    <button
      type="button"
      className="ml-auto rounded bg-indigo-50 px-2 py-1 my-1 text-xs font-semibold text-blue-600 shadow-sm hover:bg-indigo-100"
      onClick={addItem}
    >
      + 추가하기
    </button>
  );
}
