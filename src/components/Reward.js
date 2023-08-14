import { useDispatch, useSelector } from "react-redux";
import { increment, incrementByAmount } from "../reducers/rewardReducer";

export default function Reward() {
  const dispatch = useDispatch();
  const points = useSelector((state) => state.reward.points);
  return (
    <div>
      <h4>Reward Component</h4>
      <h3>Reward : {points}</h3>
      <button onClick={() => dispatch(increment())}>Increment +</button>
      <button onClick={() => dispatch(incrementByAmount(10))}>
        Increment By 10+
      </button>
      <hr />
    </div>
  );
}
