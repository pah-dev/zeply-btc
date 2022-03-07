import React from "react";
import Search from "./Search";
import AddressFav from "./AddressFav";
import TransFav from "./TransFav";
import AddressTop from "./AddressTop";
import TransTop from "./TransTop";

export default function Home() {
  return (
    <div className="app-component">
      <Search></Search>
      <AddressFav></AddressFav>
      <TransFav></TransFav>
      <AddressTop></AddressTop>
      <TransTop></TransTop>
    </div>
  );
}
