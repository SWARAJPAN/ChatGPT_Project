import { Avatar, Button, TextField } from "@mui/material";
import { useState } from "react";
import theme from "./theme/ThemeMui";
import { ThemeProvider } from "@mui/material/styles";

import "./App.scss";
import NewChat from "./components/NewChat";
import ChatDisplay from "./chat content/ChatDisplay";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
        <aside className='side-bar'>
          <NewChat />
        </aside>
        <section className='chat-content'>
          <ChatDisplay />
        </section>
      </div>
    </ThemeProvider>
  );
}

export default App;
