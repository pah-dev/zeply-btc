import React from "react";
import { render, screen } from "@testing-library/react";
import Address from "../Address";

test("Address title", () => {
  const params = { addr: "1EzwoHtiXB4iFwedPr49iywjZn2nnekhoj" };
  render(<Address params={params} />);
  const titleElement = screen.getByText("ADDRESS");
  expect(titleElement).toBeInTheDocument();
});
