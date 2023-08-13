import { useDispatch, useSelector } from "react-redux";
import { increment } from "../slices/bonusSlice";

export default function Bonus() {
  const dispatch = useDispatch();
  const points = useSelector((state) => state.bonus.points);
  return (
    <div>
      <h4>Bonus Component</h4>
      <h3>Bonus : {points}</h3>
      <button onClick={() => dispatch(increment())}>Increment +</button>
      <hr />
    </div>
  );
}
