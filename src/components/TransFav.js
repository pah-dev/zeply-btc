import { useState, useEffect } from "react";
import getFavs from "../services/getFavs";

export default function TransFav() {
  const [data, setTrans] = useState([]);

  //   const handleChange = (e) => {
  //     setAddrs(e.target.value);
  //     console.log({ value: e.target.value });
  //   };

  useEffect(function () {
    const resp = getFavs("T");
    setTrans(resp);
  }, []);

  return (
    <div data-testid="trans-fav-element" className="search">
      {data.length > 0 ? (
        <section className="form-address-content">
          <div className="separator"></div>
          <div className="search-title">Favorite Transactions</div>
          <div className="card bg-dark border-info address-card">
            <div className="card-body">
              <table>
                <tbody>
                  {data.map((txs) => (
                    <tr>
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
