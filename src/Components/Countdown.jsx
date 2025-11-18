import { useState, useEffect } from "react";

function CountDown() {
  const [count, setCount] = useState(10);
  useEffect(() => {
    const timer =
      count > 0 &&
      setInterval(() => {
        setCount((count) => count - 1);
      }, 1000);
    return () => clearInterval(timer);
  }, [count]);
  return (
    <div>
      {count > 0 ? <h2>{count}</h2> : <h2>Gratulerer med Dagen!</h2>}
    </div>
  );
}
export default CountDown;
