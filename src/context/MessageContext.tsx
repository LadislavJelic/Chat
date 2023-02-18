import { createContext, Dispatch, SetStateAction } from "react";
import { Message } from "../shared/types";

interface MessageContextProps {
  messages: Message[];
  newMessage: string;
  setNewMessage: Dispatch<SetStateAction<string>>;
}

const defaultValue = {
  messages: [],
  newMessage: "",
  setNewMessage: () => null,
};

export const MessageContext = createContext<MessageContextProps>(defaultValue);

MessageContext.displayName = "Message context";
