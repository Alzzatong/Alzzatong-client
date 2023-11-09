interface Props {
  id?: string;
  holder?: string;
  value: string;
  onBlur: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextInput = ({id, holder, value, onBlur} : Props) => (
  <div>
    <label
      htmlFor={id}
      className="block text-sm font-medium text-gray-700"
    >
    </label>
    <div className="mt-1">
      <input
        type="text"
        id={id}
        name={id}
        autoComplete="text"
        defaultValue={value}
        onBlur={onBlur}
        placeholder={holder}
        className="block w-full p-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
      />
    </div>
  </div>
);

export default TextInput;
