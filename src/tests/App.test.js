import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import App from "../App";

window.document.getSelection = jest.fn();

describe("App tests", () => {
  test("Add user flow", async () => {
    render(<App />);

    const expectedNewUser = { name: "Nick", email: "nick.bowler@gmail.com" };

    const nameInput = screen.getByRole("textbox", { name: /name/i });
    const emailInput = screen.getByRole("textbox", { name: /email/i });
    const submitButton = screen.getByRole("button");

    await user.click(nameInput);
    await user.keyboard(expectedNewUser.name);
    await user.click(emailInput);
    await user.keyboard(expectedNewUser.email);
    await user.click(submitButton);

    const nameCell = screen.getByRole("cell", { name: expectedNewUser.name });
    const emailCell = screen.getByRole("cell", { name: expectedNewUser.email });

    expect(nameCell).toBeInTheDocument();
    expect(emailCell).toBeInTheDocument();
  });
});
