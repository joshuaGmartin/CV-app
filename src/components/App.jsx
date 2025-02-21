import { useState } from "react";
import "../styles/App.css";
import Test from "./Test.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Test
        count={count}
        onClick={() => setCount((count) => count + 1)}
        message="+1"
      />
      <Test
        count={count}
        onClick={() => setCount((count) => count - 1)}
        message="-1"
      />
    </>
  );
}

export default App;
