import React from "react";
import "./App.css";
import CountUp from "./CountUp";
import Dialog from "./Dialog";
import Farms from "./Farms";
import ImmediateInvoke from "./ImmediateInvoke";
function App() {
  const [personName, setPersonName] = React.useState("");
  return (
    <div>
      <ImmediateInvoke />
      <Dialog />
      <CountUp />
      <Farms />
    </div>
  );
}
export default App;
