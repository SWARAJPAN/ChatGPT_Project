import React from "react";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

export default function NewChat(props) {
  return (
    <div>
      <Button variant='outlined' onClick={props.handleNewChat}>
        <AddIcon sx={{ paddingRight: "10px", height: "20px" }} />
        New Chat
      </Button>
    </div>
  );
}
