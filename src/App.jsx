
import Countdown from './Components/Countdown';
import Count from './Components/Count'
import { useState } from "react";
function App() {
  const [count, setCount] = useState(0);
  return (
    <>
     <h1>Alternativ 1</h1>
     <h2>Tellere</h2>
      <Count count={count} setCount={setCount} />
      <Count count={count} setCount={setCount} />
      <Count count={count} setCount={setCount} />
      <hr></hr>
      <h1>Alternativ 2</h1>
      <Countdown></Countdown>
    </>
  )
}
export default App
