import { useState, useEffect } from "react";
import getTop from "../services/getTop";

export default function TransTop() {
  const [data, setTrans] = useState([]);

  useEffect(function () {
    getTop("T").then((resp) => setTrans(resp));
  }, []);

  return (
    <div data-testid="trans-fav-element" className="search">
      {data.length > 0 ? (
        <section className="form-address-content">
          <div className="separator"></div>
          <div className="search-title">Top 5 searched Transactions</div>
          <div className="card bg-dark border-info address-card">
            <div className="card-body">
              <table>
                <tbody>
                  {data.map((txs) => (
                    <tr key={txs.hash}>
                      <td className="fav-line">
                        {">  "}
                        <a href={`/transaction/${txs.hash}`}>{txs.hash}</a>
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
