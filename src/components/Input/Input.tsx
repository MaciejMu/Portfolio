import style from "./Input.module.scss";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  name: string;
  label: string;
  placeholder?: string;
  error?: boolean;
  errorMessage?: string;
}

const Input = ({
  id,
  name,
  label,
  placeholder,
  error = false,
  errorMessage = "",
  ...props
}: InputProps) => {
  return (
    <div className="inputContainer">
      <label htmlFor={id}>{label}</label>
      <input
        {...props}
        type="text"
        id={id}
        name={name}
        placeholder={placeholder}
      />
      {error && <p className={style.errorMsg}>*{errorMessage}</p>}
    </div>
  );
};
export default Input;
