import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import AddUserView from "../AddUserView";

window.document.getSelection = jest.fn();

export function renderAddUsersView() {
  const submitUserMockFn = jest.fn();
  render(<AddUserView addUser={submitUserMockFn} />);
  const nameInput = screen.getByRole("textbox", { name: /name/i });
  const emailInput = screen.getByRole("textbox", { name: /email/i });
  const submitButton = screen.getByRole("button");
  return {
    nameInput,
    emailInput,
    submitButton,
    submitUserMockFn,
  };
}

describe("AddUserView", () => {
  test("The form contains email and name input fields and submit button", () => {
    const { nameInput, emailInput } = renderAddUsersView();
    expect(nameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
  });

  test("The AddUserForm is submitted correctly", async () => {
    const expectedNewUser = { name: "Nick", email: "nick.bowler@gmail.com" };
    const { nameInput, emailInput, submitButton, submitUserMockFn } =
      renderAddUsersView();

    await user.click(nameInput);
    await user.keyboard(expectedNewUser.name);
    await user.click(emailInput);
    await user.keyboard(expectedNewUser.email);
    await user.click(submitButton);

    expect(submitUserMockFn).toHaveBeenCalled();
    expect(submitUserMockFn).toHaveBeenCalledWith(expectedNewUser);
  });

  test("The form is cleared after submit", async () => {
    const { nameInput, emailInput, submitButton } = renderAddUsersView();

    await user.click(nameInput);
    await user.keyboard("tom");
    await user.click(emailInput);
    await user.keyboard("tom_holland@spyder.co");
    await user.click(submitButton);

    expect(nameInput).toHaveValue("");
    expect(emailInput).toHaveValue("");
  });
});
