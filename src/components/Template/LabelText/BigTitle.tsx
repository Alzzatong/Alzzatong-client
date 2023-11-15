interface Props {
    text: string;
    className: string
  }
  export default function BigTitle({ text, className }: Props) {
    return (
      <h1 className={className}>
        {text}
      </h1>
    );
  }
  