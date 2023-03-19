const UsersTable = ({ users }) => {
  const renderedTableBody = users.map((user) => (
    <tr>
      <td>{user.name}</td>
      <td>{user.email}</td>
    </tr>
  ));

  return (
    <table>
      <tr>
        <th>username</th>
        <th>email</th>
      </tr>
      {renderedTableBody}
    </table>
  );
};

export default UsersTable;
