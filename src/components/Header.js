import React from "react";
import { Link } from "wouter";

export default function Header() {
  const content = null;

  return (
    <header data-testid="header-element" className="app-header">
      <div className="app-logo">
        <Link to="/">
          <figure>
            <img alt="BTC logo" src="/logo-btc.svg" />
          </figure>
        </Link>
      </div>
      <div className="app-title">BTC EXPLORER</div>
      {content}
    </header>
  );
}
