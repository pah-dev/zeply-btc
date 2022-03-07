import React, { useState } from "react";

const Context = React.createContext({});

export function AppProvider({ children }) {
  const [currency, setCurrency] = useState({
    id: "BTC",
    name: "BTC",
    value: 1,
  });

  function saveCurrency(cur) {
    const newCurrency = {
      id: cur.id,
      name: cur.name,
      value: cur.value,
    };
    setCurrency(newCurrency);
  }

  return (
    <Context.Provider value={{ currency, saveCurrency }}>
      {children}
    </Context.Provider>
  );
}

export default Context;
