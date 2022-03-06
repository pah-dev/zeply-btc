import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../../App";

test("App title test", () => {
  render(<App />);
  const titleElement = screen.getByText("BTC EXPLORER");
  expect(titleElement).toBeInTheDocument();
});

test("Header test", () => {
  render(<App />);
  const titleElement = screen.getByTestId("header-element");
  expect(titleElement).toBeInTheDocument();
});

test("Footer test", () => {
  render(<App />);
  const titleElement = screen.getByTestId("footer-element");
  expect(titleElement).toBeInTheDocument();
});
