import React, {useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, incrementByValue } from "./counterSlice";

function Counter() {
  const count = useSelector((state) => state.counter.value);
  const [incrementAmount, setIncrementAmount] = useState('2');

  const dispatch = useDispatch();
  return (
    <div className="counter">
      <button onClick={() => dispatch(increment())}>Increment</button>
      <p>{count}</p>
      <button onClick={() => dispatch(decrement())}>Decrement</button>

      <input        
        aria-label="Set increment amount"
        value={incrementAmount}
        onChange={(e) => setIncrementAmount(e.target.value)}
      />
      <button        
        onClick={() =>
          dispatch(incrementByValue(Number(incrementAmount) || 0))
        }
      >
        Add Amount
      </button>
    </div>
  );
}

export default Counter;
