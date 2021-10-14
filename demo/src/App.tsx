import { useState } from "react";
import { EmailEditor, Button } from "@noname-ui/email-editor";
import { FlowEditor } from "@noname-ui/flow-editor";
import "./App.css";

function App() {
  return (
    <div className="App">
      <EmailEditor />
      <FlowEditor />
      <Button>click 123!</Button>
    </div>
  );
}

export default App;
