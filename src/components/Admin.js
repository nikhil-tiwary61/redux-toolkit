import { useGetAccountsQuery } from "../api/AdminSlice";

export default function Admin() {
  const { data, error, isLoading } = useGetAccountsQuery();
  return (
    <div>
      <h4>Admin Component</h4>
      {data &&
        data.map((account) => (
          <p>
            {account.id} : {account.amount}
          </p>
        ))}
      {/* <button onClick={() => dispatch(increment())}>Increment +</button> */}
      <hr />
    </div>
  );
}
