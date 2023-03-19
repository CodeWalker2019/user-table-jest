import { useCallback, useState } from "react";
import AddUserView from "./AddUserView";
import UsersTable from "./UsersTable";

import "./App.css";

const App = () => {
  const [users, setUsers] = useState([]);

  const addUser = useCallback(
    (user) => setUsers((users) => users.concat(user)),
    []
  );

  return (
    <div className="App">
      <AddUserView addUser={addUser} />
      <hr />
      <UsersTable users={users} />
    </div>
  );
};

export default App;
