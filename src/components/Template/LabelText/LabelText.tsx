interface Props {
  // id: string;
  text: string;
}
export default function LabelText({  text }: Props) {
  return (
    <label className="block text-sm font-medium text-gray-700">
      {text}
    </label>
  );
}
