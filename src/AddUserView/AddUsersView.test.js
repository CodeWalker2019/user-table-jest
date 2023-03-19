import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import AddUserView from ".";

window.document.getSelection = jest.fn();

describe("AddUserView", () => {
  test("The form contains email and name input fields and submit button", () => {
    render(<AddUserView />);
    const nameInput = screen.getByRole("textbox", { name: /name/i });
    const emailInput = screen.getByRole("textbox", { name: /email/i });
    expect(nameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
  });

  test("The AddUserForm is submitted correctly", async () => {
    const submitUserMockFn = jest.fn();
    const expectedNewUser = { name: "Nick", email: "nick.bowler@gmail.com" };

    render(<AddUserView addUser={submitUserMockFn} />);
    const nameInput = screen.getByRole("textbox", { name: /name/i });
    const emailInput = screen.getByRole("textbox", { name: /email/i });
    const submitButton = screen.getByRole("button");

    await user.click(nameInput);
    await user.keyboard(expectedNewUser.name);
    await user.click(emailInput);
    await user.keyboard(expectedNewUser.email);
    await user.click(submitButton);

    expect(submitUserMockFn).toHaveBeenCalled();
    expect(submitUserMockFn).toHaveBeenCalledWith(expectedNewUser);
  });
});
