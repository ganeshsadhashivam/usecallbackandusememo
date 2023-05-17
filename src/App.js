import logo from "./logo.svg";
import "./App.css";
import GreetingBox from "./GreetingBox";
import { useCallback, useState } from "react";
function App() {
  const [name, setName] = useState("");
  const [counter, setCounter] = useState(0);

  const getGreeting = useCallback(() => {
    return `Hello ${name}!`;
  }, [name]);
  return (
    <div className="App">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <GreetingBox getGreeting={getGreeting} />
      {counter}
      <button onClick={() => setCounter(counter + 1)}>by 1</button>
    </div>
  );
}

export default App;
