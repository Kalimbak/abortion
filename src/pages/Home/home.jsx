import React from "react";
import { increment, decrement } from "../../redux/actions";
import { useSelector, useDispatch } from "react-redux";

export const Home = () => {
    const counter = useSelector(state => state.counter);
    const dispatch = useDispatch();
  return (
    <div>
      <h3>Abortion</h3> <br />
      <p> This i will be landing page  </p> <br />

      <h4> This is a counter for future testing</h4>
      <p>Counter: <span>{counter}</span></p>

      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
    
  );
}
export default Home;
