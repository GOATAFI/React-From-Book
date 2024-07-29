import React from "react";
import "./App.css";
import Counter from "./Counter";
import CountUp from "./CountUp";
import Dialog from "./Dialog";
import Farms from "./Farms";
import ImmediateInvoke from "./ImmediateInvoke";
import ToDoFuncByMafi from "./ToDoFuncByMafi";
function App() {
  const [personName, setPersonName] = React.useState("");
  return (
    <div>
      <ImmediateInvoke />
      <Dialog />
      <CountUp />
      <Farms />
      <ToDoFuncByMafi />
      <Counter />
    </div>
  );
}
export default App;
