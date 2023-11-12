type Props = {
  inputNumber: number;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const InputNumberButton = ({ inputNumber, ...props }: Props) => {
  return (
    <button
      style={{
        width: "100px",
        height: "100px",
        fontSize: "30px",
      }}
      {...props}
    >
      {inputNumber}
    </button>
  );
};

export default InputNumberButton;
