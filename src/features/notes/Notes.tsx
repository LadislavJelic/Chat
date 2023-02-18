import React, { useContext, useEffect, useRef } from "react";
import { MessageContext } from "../../context/MessageContext";
import { Message } from "../../shared/types";
import Note from "../note/Note";
import "./Notes.scss";

const Notes = () => {
  const { messages } = useContext(MessageContext);
  const noteEndRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    noteEndRef.current?.scrollIntoView();
  }, [messages]);

  return (
    <div className="notes-wrapper">
      <div className="inner-wrapper">
        {messages?.map((message: Message) => {
          return <Note key={message._id} note={message} />;
        })}
        <div ref={noteEndRef}></div>
      </div>
    </div>
  );
};

export default Notes;
