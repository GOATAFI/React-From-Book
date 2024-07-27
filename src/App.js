import React from "react";
import "./App.css";
import CountUp from "./CountUp";
import Dialog from "./Dialog";
function App() {
  const [personName, setPersonName] = React.useState("");
  return (
    <div>
      <Dialog />
      <CountUp />
    </div>
  );
}
export default App;
