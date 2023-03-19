import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import AddUserView from ".";

window.document.getSelection = jest.fn();

function renderAddUsersView() {
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
    const {
      nameInput,
      emailInput,
      submitButton,
      submitUserMockFn,
    } = renderAddUsersView();

    await user.click(nameInput);
    await user.keyboard(expectedNewUser.name);
    await user.click(emailInput);
    await user.keyboard(expectedNewUser.email);
    await user.click(submitButton);

    expect(submitUserMockFn).toHaveBeenCalled();
    expect(submitUserMockFn).toHaveBeenCalledWith(expectedNewUser);
  });
});
