import { useState } from "react";
export default function CountUp() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Add</button>
      {count}
    </div>
  );
}
