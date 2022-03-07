import { useState, useEffect } from "react";
import getTop from "../services/getTop";

export default function AddressTop() {
  const [data, setAddress] = useState([]);

  useEffect(function () {
    getTop("A").then((resp) => setAddress(resp));
  }, []);

  return (
    <div data-testid="address-fav-element" className="search">
      {data.length > 0 ? (
        <section className="form-address-content">
          <div className="separator"></div>
          <div className="search-title">Top 5 searched Addresses</div>
          <div className="card bg-dark border-info address-card">
            <div className="card-body">
              <table>
                <tbody>
                  {data.map((addr) => (
                    <tr>
                      <td className="fav-line">
                        {">  "}
                        <a href={`/address/${addr.hash}`}>{addr.hash}</a>
                      </td>
                    </tr>
                  ))}
                </tbody>
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
