import React, { useEffect, useState } from "react";
import Form from "./features/form/Form";
import axios from "axios";
import { MessageContext } from "./context/MessageContext";
import { Message } from "./shared/types";
import { TOKEN } from "./shared/constants";
import Notes from "./features/notes/Notes";

const App = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState<string>("");

  const getMessages = async () => {
    try {
      const response = await axios.get(
        `https://chatty.doodle-test.com/api/chatty/v1.0/?token=${TOKEN}`
      );
      const { data } = response;
      setMessages(data);
    } catch (err) {
      console.log(err);
    }
  };

  const submitForm = async () => {
    try {
      const payload = { message: newMessage, author: "Ladislav" };
      const headers = {
        "Content-Type": "application/json",
        token: TOKEN,
      };

      await axios.post(
        "https://chatty.doodle-test.com/api/chatty/v1.0",
        payload,
        {
          headers: headers,
        }
      );
      console.log("successfully added message"); // here we should inform users that message is added. Maybe some popup.
      setNewMessage("");
      getMessages();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMessages();
  }, []);

  return (
    <div className="App">
      <MessageContext.Provider value={{ messages, newMessage, setNewMessage }}>
        <Notes />
        <Form submitForm={submitForm} />
      </MessageContext.Provider>
    </div>
  );
};

export default App;
