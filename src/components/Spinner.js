import React from "react";

export default function Spinner() {
  return (
    <div data-testid="spinner-element" className="lds-ring">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}
