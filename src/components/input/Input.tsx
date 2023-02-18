import React, { ChangeEvent, FC } from "react";
import "./Input.scss";

interface IInput {
  type?: string;
  placeholder: string;
  value: string;
  handleChange: (e: string) => void;
  className?: string;
}

const Input: FC<IInput> = ({
  type = "text",
  placeholder,
  value,
  handleChange,
  className,
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e: ChangeEvent<HTMLInputElement>) =>
        handleChange(e.target.value)
      }
      className={`${className} input`}
    />
  );
};

export default Input;
