import React, { useState } from "react";
import "./App.css";
import Counter from "./Counter";
import CountUp from "./CountUp";
import Dialog from "./Dialog";
import Farms from "./Farms";
import ImmediateInvoke from "./ImmediateInvoke";
import PropsMutator from "./PropsMutator";
import SiteLink from "./SiteLink";
import ToDoFuncByMafi from "./ToDoFuncByMafi";
function App() {
  const [personName, setPersonName] = useState("");
  const [theNumber, setTheNumber] = useState(0);
  console.log(theNumber);
  return (
    <div>
      <ImmediateInvoke />
      <Dialog />
      <CountUp />
      <Farms />
      <ToDoFuncByMafi />
      <Counter />
      <PropsMutator theNumber={theNumber} setTheNumber={setTheNumber} />
      <SiteLink url="http://example.com" linkName={{ name: "Example" }} />
    </div>
  );
}
export default App;
