import React from "react";
import AddIcon from "@mui/icons-material/Add";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import { IconButton, InputAdornment } from "@mui/material";
import { TextField } from "@mui/material";
import { useEffect } from "react";

export default function InputText(props) {
  const [message, setMessage] = React.useState("");
  const [sendMessageToChatgpt, setSendMessageToChatgpt] = React.useState(false);

  // get the message from the input field and send it to ChatDisplay.jsx

  const handleChange = (e) => {
    setMessage(e.target.value);
    // console.log(message);
  };

  //send message to AI and get response from AI

  async function handleSend(e) {
    e.preventDefault();
    setSendMessageToChatgpt([sendMessageToChatgpt, { message: `${message}` }]);
    setMessage("");
    props.setUserMessage(message);

    const response = await fetch("http://localhost:3080/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: message,
      }),
    });
    const data = await response.json();

    setSendMessageToChatgpt([
      sendMessageToChatgpt,
      { message: `${data.message}` },
    ]);
    console.log(data.message);
    handleResponse(data);
  }

  //send response from AI to ChatDisplay.jsx

  const handleResponse = (data) => {
    props.setGptMessage(data.message);
  };

  return (
    <div className='input-bg'>
      <TextField
        id='outlined-basic'
        autoComplete='off'
        placeholder='Write your message here...'
        InputProps={{
          endAdornment: (
            <IconButton
              aria-label='send message'
              component='label'
              onClick={handleSend}
            >
              <SendRoundedIcon
                sx={{
                  color: "#ACACBE",
                  height: "20px",
                }}
              />
            </IconButton>
          ),
        }}
        value={message}
        onChange={handleChange}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSend(e);
          }
        }}
      />
    </div>
  );
}
