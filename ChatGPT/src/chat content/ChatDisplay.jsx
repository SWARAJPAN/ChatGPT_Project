import { Avatar, Button } from "@mui/material";
import React from "react";
import FaceIcon from "@mui/icons-material/Face";
import GptIcon from "../assets/GptIcon";
import InputText from "../components/InputText";
import NewChat from "../components/NewChat";
import { useEffect } from "react";

export default function ChatDisplay() {
  // //get the message from InputText.jsx
  const [userMessage, setUserMessage] = React.useState("");
  // //get the response from AI from InputText.jsx
  const [gptMessage, setGptMessage] = React.useState("");
  //loading state for the response from AI
  const [loading, setLoading] = React.useState(false);

  const [chatLog, setChatLog] = React.useState([]);

  const [newChat, setNewChat] = React.useState(false);

  //store messages in an array

  useEffect(() => {
    if (userMessage) {
      setChatLog([...chatLog, userMessage]);
    }
  }, [userMessage]);

  useEffect(() => {
    setLoading(true);
    if (gptMessage) {
      setChatLog([...chatLog, gptMessage]);
    }
    setLoading(false);
  }, [gptMessage]);

  console.log(chatLog);

  return (
    <div className='chat-display'>
      {/* <--------------------------------map through the array and display the messages-------------------------------->*/}

      {chatLog.map((message, index) => (
        <div
          key={index}
          className={index === chatLog.length - 1 ? "last-chat" : ""}
        >
          {index % 2 === 0 ? ( //if index is even, then it is a user message else it is a response from AI
            <div className='user-message'>
              <Avatar
                sx={{
                  marginRight: "1rem",
                  color: "#353740",
                }}
              >
                <FaceIcon />
              </Avatar>
              <h4>{message}</h4>
            </div>
          ) : (
            <div className='chatgpt-message'>
              <Avatar
                className='chatgpt-avatar'
                sx={{
                  marginRight: "1rem",
                  bgcolor: "#10A37F",
                }}
              >
                <GptIcon />
              </Avatar>
              {/* <--------------------------------Tydying up the Response message from API --------------------------------> */}

              {loading ? (
                <h4>Loading</h4>
              ) : (
                <h4>
                  {message
                    .replace(/^\s+/g, "")
                    .split("\n")
                    .map((line, i) => (
                      <div key={i}>
                        {line}
                        <br />
                      </div>
                    ))}
                </h4>
              )}
            </div>
          )}
        </div>
      ))}

      <InputText
        setUserMessage={setUserMessage}
        setGptMessage={setGptMessage}
        setLoading={setLoading}
      />
    </div>
  );
}
