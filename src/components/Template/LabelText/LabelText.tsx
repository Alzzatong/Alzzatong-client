interface Props {
  id: string;
  text: string;
}
export default function LabelText({ id, text }: Props) {
  return (
    <label htmlFor={id} className="block text-sm font-medium text-gray-700">
      {text}
    </label>
  );
}
