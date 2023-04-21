import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./store/slices/counter";
import "./App.css";

function App() {
  /* usando llaves
  const counter = useSelector((state) => {
     return state.counter.value;
  });
  */
  const dispacth = useDispatch();

  const counter = useSelector((state) => state.counter.value);

  return (
    <>
      <h1>Aprendiendo a usar Redux Toolkit (RTK)</h1>
      <h2>{counter}</h2>
      <button onClick={() => dispacth(increment())}>Increment</button>
      <button onClick={() => dispacth(decrement())}>Decrement</button>
    </>
  );
}

export default App;
