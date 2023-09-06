import React, { forwardRef } from "react";
import style from "./input.module.css";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error: boolean;
  errorMessage: string | undefined;
  label?: string;
  wrapperClassName?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      wrapperClassName,
      autoComplete = "off",
      required = false,
      type = "text",
      placeholder = " ",
      error,
      errorMessage,
      label,
      ...props
    },
    ref
  ) => {
    const [show, setShow] = React.useState(false);
    return (
      <div
        className={`${style.formContainer} ${wrapperClassName} ${
          error && style.error
        }`}
      >
        <div className={style.formControl}>
          <input
            className={`${className} ${style.input}`}
            autoComplete={autoComplete}
            ref={ref}
            {...props}
            placeholder={placeholder}
            required={required}
            type={type === "password" ? (show ? "text" : "password") : type}
          />
          {getLabel(type!) && <span>{label}</span>}
          {type === "password" && (
            <div className={style.passwordIcon} onClick={() => setShow(!show)}>
              {show ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </div>
          )}
        </div>
        <p className={style.errorText}>{error && errorMessage}</p>
      </div>
    );
  }
);

export default Input;

const getLabel = (type: string) => {
  const types = ["text", "email", "password", "number", "tel", "date"];
  return types.includes(type);
};
