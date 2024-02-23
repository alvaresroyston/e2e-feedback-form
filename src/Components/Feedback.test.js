import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Feedback from "./Feedback";

test("renders input fields correctly", () => {
  render(<Feedback />);
  
  const nameInput = screen.getByPlaceholderText("Name");
  const emailInput = screen.getByPlaceholderText("Email");
  const contactInput = screen.getByPlaceholderText("Phone");
  const commentInput = screen.getByPlaceholderText("Comment");

  expect(nameInput).toBeInTheDocument();
  expect(emailInput).toBeInTheDocument();
  expect(contactInput).toBeInTheDocument();
  expect(commentInput).toBeInTheDocument();
});

test("allows user to type in input fields", () => {
  render(<Feedback />);
  
  const nameInput = screen.getByPlaceholderText("Name");
  const emailInput = screen.getByPlaceholderText("Email");
  const contactInput = screen.getByPlaceholderText("Phone");
  const commentInput = screen.getByPlaceholderText("Comment");

  fireEvent.change(nameInput, { target: { value: "John Doe" } });
  fireEvent.change(emailInput, { target: { value: "john@example.com" } });
  fireEvent.change(contactInput, { target: { value: "1234567890" } });
  fireEvent.change(commentInput, { target: { value: "This is a test comment" } });

  expect(nameInput.value).toBe("John Doe");
  expect(emailInput.value).toBe("john@example.com");
  expect(contactInput.value).toBe("1234567890");
  expect(commentInput.value).toBe("This is a test comment");
});

test("displays validation error when submitting empty form", async () => {
  render(<Feedback />);
  
  const submitButton = screen.getByText("Submit");
  fireEvent.click(submitButton);

  await waitFor(() => {
    expect(screen.getByText("Name is required")).toBeInTheDocument();
    expect(screen.getByText("Email is required")).toBeInTheDocument();
    expect(screen.getByText("Phone number is required")).toBeInTheDocument();
    expect(screen.getByText("Comment is required")).toBeInTheDocument();
  });
});

