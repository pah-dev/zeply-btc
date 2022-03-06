import React from "react";
import { render, screen } from "@testing-library/react";
import Search from "../Search";
import AddressFav from "../AddressFav";
import TransFav from "../TransFav";

test("Search title", () => {
  render(<Search />);
  const titleElement = screen.getByTestId("search-element");
  expect(titleElement).toBeInTheDocument();
});

test("Address Fav", () => {
  render(<AddressFav />);
  const titleElement = screen.getByTestId("address-fav-element");
  expect(titleElement).toBeInTheDocument();
});

test("Trans Fav", () => {
  render(<TransFav />);
  const titleElement = screen.getByTestId("trans-fav-element");
  expect(titleElement).toBeInTheDocument();
});
