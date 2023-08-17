import { useSelector } from "react-redux";
import "./App.css";
import Account from "./components/Account";
import Bonus from "./components/Bonus";
import Reward from "./components/Reward";
import Admin from "./components/Admin";

function App() {
  const amount = useSelector((state) => state.account.amount);
  const points = useSelector((state) => state.bonus.points);
  const account = useSelector((state) => state.account);

  return (
    <div className="App">
      <h4>App</h4>
      {account.pending ? (
        "loading..."
      ) : account.error ? (
        <p>{account.error}</p>
      ) : (
        <h3>Current amount : {amount}</h3>
      )}

      <h3>Bonus : {points}</h3>
      <hr />
      <Account></Account>
      <Bonus></Bonus>
      <Reward></Reward>
      <Admin />
    </div>
  );
}

export default App;
