import React, { useState } from "react";
import { Button } from "react-bootstrap";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="text-center mt-4">
      <h3>Counter Value: {count}</h3>
      <Button variant="success" className="m-2" onClick={() => setCount(count + 1)}>+</Button>
      <Button variant="danger" className="m-2" onClick={() => setCount(count - 1)}>-</Button>
      <Button variant="secondary" className="m-2" onClick={() => setCount(0)}>Reset</Button>
    </div>
  );
}

export default Counter;
