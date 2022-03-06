import React from "react";
import { render, screen } from "@testing-library/react";
import Trans from "../Trans";

// test("Trans title", () => {
//   const params = {
//     hash: "TEST",
//   };
//   render(<Trans params={params} />);
//   const titleElement = screen.getByText("TRANSACTIONS");
//   expect(titleElement).toBeInTheDocument();
// });

test("Trans test", () => {
  const params = {
    hash: "TEST",
  };
  render(<Trans params={params} />);
  const titleElement = screen.getByTestId("spinner-element");
  expect(titleElement).toBeInTheDocument();
  // const titleElement = screen.getByTestId("trans-element");
  // expect(titleElement).toBeInTheDocument();
});
