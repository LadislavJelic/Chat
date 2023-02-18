import React, { FC } from "react";
import "./Button.scss";

interface IButton {
  text: string;
  handleClick: () => void;
  className?: string;
}

const Button: FC<IButton> = ({ text, handleClick, className }) => {
  return (
    <button onClick={handleClick} className={`${className} button`}>
      {text}
    </button>
  );
};

export default Button;
