import React, { useContext } from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import AppContext from "../context/AppContext";
import getTicker from "../services/getTicker";

export default function Footer() {
  const { currency, saveCurrency } = useContext(AppContext);

  const currencies = [
    {
      key: "BTC",
      id: "BTC",
      name: "BTC",
      icon: "/btc-icon.svg",
    },
    {
      key: "EUR",
      id: "EUR",
      name: "EUR",
      icon: "/eur-icon.svg",
    },
    {
      key: "USD",
      id: "USD",
      name: "USD",
      icon: "/usd-icon.svg",
    },
    {
      key: "GBP",
      id: "GBP",
      name: "GBP",
      icon: "/gbp-icon.svg",
    },
  ];

  const handleChange = (e) => {
    getTicker().then((data) => {
      var val = 1;
      if (e !== "BTC") {
        val = data[e].last;
      }
      if (currency.id !== e) {
        saveCurrency({ id: e, name: e, value: val });
      }
    });
  };

  return (
    <footer data-testid="footer-element" className="app-footer">
      <div className="drop-currency">
        <DropdownButton
          drop="up"
          size="sm"
          variant="dark"
          title={currency.id ? currency.id : "BTC"}
          onSelect={handleChange}
        >
          {currencies.map((cur) => (
            <Dropdown.Item eventKey={cur.id} key={cur.id}>
              <div className="drop-item">
                <img
                  className="drop-img"
                  src={cur.icon}
                  width="30px"
                  height="30px"
                  alt="no"
                />
                <span>{cur.name}</span>
              </div>
            </Dropdown.Item>
          ))}
        </DropdownButton>
      </div>
    </footer>
  );
}
