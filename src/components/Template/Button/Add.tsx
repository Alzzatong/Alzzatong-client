export default function AddButton() {
  return (
    <div className="flex justify-end">
      <button
        type="button"
        className="rounded bg-indigo-50 px-2 py-1 text-xs font-semibold text-blue-600 shadow-sm hover:bg-indigo-100"
      >
        + 추가하기
      </button>
    </div>
  );
}
