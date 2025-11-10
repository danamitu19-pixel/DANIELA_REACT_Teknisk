import { useState } from "react";

function Count({ count, setCount }) {
  
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Øk</button>
    </div>
  );
}

export default Count;
