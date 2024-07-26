import React from "react";
import "./App.css";
import Dialog from "./Dialog";
function App() {
  const [personName, setPersonName] = React.useState("");
  return (
    <div>
      <Dialog />
    </div>
  );
}
export default App;
