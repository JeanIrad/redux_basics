import { useFetchUserQuery } from "./features/users/usersApi";

function App() {
  const { data = [], isFetching } = useFetchUserQuery();
  console.log(data, isFetching);
  return (
    <div>
      Number of Users fetched: {data.size}
      <table border={1}>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Username</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {/* {data.users.map((user) => (
            <tr key={user.id}>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.email}</td>
              <td>{user.username}</td>
              <td>{user.phone}</td>
            </tr>
          ))} */}
        </tbody>
      </table>
    </div>
  );
}

export default App;
