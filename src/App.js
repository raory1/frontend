import {useState} from "react";

function App() {

  const[counter, setCounter] = useState(0);
  function increment(){
    setCounter(counter + 1);
    console.log(counter)
  }
  return (
    <div className="App">
      <div>
        contador:{counter}
      </div>
      <button onClick={increment}>Incremento</button>
    </div>
  );
}

export default App;
