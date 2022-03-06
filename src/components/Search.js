import { useState } from "react";

export default function Search() {
  const [hash, setHash] = useState([]);

  const handleChange = (e) => {
    setHash(e.target.value);
    console.log({ value: e.target.value });
  };

  return (
    <div data-testid="search-element" className="search">
      <section className="form-address-content">
        <div className="separator"></div>
        <div className="search-title">Search your transaction or address</div>
        <div className="separator"></div>
        <div>
          <div>
            <input
              className="form-control"
              type="text"
              name="btcAddress"
              onChange={handleChange}
              autoFocus
            />
          </div>
          <div className="search-btns">
            <a
              href={`/transaction/${hash}`}
              className="btn btn-info btn-view"
              alt="Search Transaction"
            >
              Search Transaction
            </a>
            <a href={`/address/${hash}`} className="btn btn-info btn-view">
              Search Address
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
