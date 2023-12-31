interface Props {
  id?: string;
  holder?: string;
  value: string;
  onBlur: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
}


export default function TextAreaBox({id, holder, value, onBlur}: Props) {
    return (
      <div>
        <div className="mt-2">
          <textarea
            rows={4}
            name={id}
            id={id}
            defaultValue={value}
            placeholder={holder}
            onBlur={onBlur}
            className="block w-full p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
    )
  }