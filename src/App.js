import React from "react";
import "./App.css";
import CountUp from "./CountUp";
import Dialog from "./Dialog";
import ImmediateInvoke from "./ImmediateInvoke";
function App() {
  const [personName, setPersonName] = React.useState("");
  return (
    <div>
      <ImmediateInvoke />
      <Dialog />
      <CountUp />
    </div>
  );
}
export default App;
