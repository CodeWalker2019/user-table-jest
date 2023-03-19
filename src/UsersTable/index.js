import React from "react";

const UsersTable = ({ users }) => {
  const renderedTableBody = users.map((user) => (
    <tr>
      <td>{user.name}</td>
      <td>{user.email}</td>
    </tr>
  ));

  return (
    <table>
      <thead>
        <tr>
          <th>username</th>
          <th>email</th>
        </tr>
      </thead>
      <tbody>{renderedTableBody}</tbody>
    </table>
  );
};

export default UsersTable;
