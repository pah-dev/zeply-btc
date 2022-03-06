import { useState, useEffect } from "react";
import getFavs from "../services/getFavs";

export default function AddressFav() {
  const [data, setAddress] = useState([]);

  //   const handleChange = (e) => {
  //     setAddrs(e.target.value);
  //     console.log({ value: e.target.value });
  //   };

  useEffect(function () {
    const resp = getFavs("A");
    setAddress(resp);
  }, []);

  return (
    <div data-testid="address-fav-element" className="search">
      {data.length > 0 ? (
        <section className="form-address-content">
          <div className="separator"></div>
          <div className="search-title">Favorite Addresses</div>
          <div className="card bg-dark border-info address-card">
            <div className="card-body">
              <table>
                {data.map((addr) => (
                  <tr>
                    <td className="fav-line">
                      {">  "}
                      <a href={`/address/${addr.hash}`}>{addr.hash}</a>
                    </td>
                  </tr>
                ))}
              </table>
            </div>
          </div>
        </section>
      ) : (
        <div></div>
      )}
    </div>
  );
}
