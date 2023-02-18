import React, { FC, useContext } from "react";
import Button from "../../components/button/Button";
import Input from "../../components/input/Input";
import { MessageContext } from "../../context/MessageContext";
import "./Form.scss";

interface IForm {
  submitForm: () => void;
}

const Form: FC<IForm> = ({ submitForm }) => {
  const { newMessage, setNewMessage } = useContext(MessageContext);

  return (
    <div className="form-wrapper">
      <div className="inner-wrapper">
        <Input
          placeholder="Message"
          value={newMessage}
          handleChange={setNewMessage}
          className="input-message"
        />
        <Button text="Send" handleClick={submitForm} className="button-send" />
      </div>
    </div>
  );
};

export default Form;
