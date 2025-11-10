
import Count from './Components/Count'
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
     <h1>Tellere</h1>
      <Count count={count} setCount={setCount} />
      <Count count={count} setCount={setCount} />
      <Count count={count} setCount={setCount} />
    </>
  )
}

export default App
