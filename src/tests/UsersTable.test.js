import React from "react";
import "@testing-library/jest-dom";
import { render, screen, within } from "@testing-library/react";
import UsersTable from "../UsersTable";

function renderUsersTable() {
  const users = [
    { name: "Olaf", email: "olaf@gmail.com" },
    { name: "Jakob", email: "jakob@gmail.com" },
    { name: "Selen", email: "selen@gmail.com" },
  ];
  render(<UsersTable users={users} />);
  return { users };
}

describe("UsersTable", () => {
  test("The table renders corrent amount of rows", () => {
    const { users } = renderUsersTable();
    const rows = within(screen.getByTestId("users")).getAllByRole("row");
    expect(rows).toHaveLength(users.length);
  });

  test("The names and emails are displayed", () =>
    renderUsersTable().users.forEach((user) => {
      const name = screen.getByRole("cell", { name: user.name });
      const email = screen.getByRole("cell", { name: user.email });
      expect(name).toBeInTheDocument();
      expect(email).toBeInTheDocument();
    }));
});
