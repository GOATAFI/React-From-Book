import { useState } from "react";
export default function Counter() {
  let [count, setCount] = useState(0);
  const handleChange = () => {
    setCount(count + 1);
  };
  return (
    <>
      <h1>Count : {count} </h1>
      <button onClick={handleChange}>Add +1</button>
    </>
  );
}
