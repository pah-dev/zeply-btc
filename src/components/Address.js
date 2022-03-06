import { useEffect, useState, useContext } from "react";
import CurrencyContext from "../context/CurrencyContext";
import Search from "./Search";
import Spinner from "./Spinner";
import FavoriteButton from "../components/FavoriteButton";
import getAddress from "../services/getAddress";
import calcPrice from "../services/tools";

export default function Address({ params }) {
  const [resp, setAddress] = useState([{ isLoading: true, data: [] }]);
  const { currency } = useContext(CurrencyContext);
  const paramsFav = { hash: params.hash, type: "A" };

  useEffect(
    function () {
      getAddress(params.hash).then((resp) => setAddress(resp));
    },
    [params]
  );

  if (resp.isLoading) {
    return (
      <>
        <Spinner />
      </>
    );
  }

  return (
    <div data-testid="address-element" className="app-component">
      <Search></Search>
      <div className="separator"></div>
      <div className="result-title">ADDRESS</div>
      <div className="separator"></div>
      {resp.data ? (
        <section className="address-content">
          <div className="card bg-dark border-info address-card">
            <div className="card-header">
              <div>
                <div className="address-fav">
                  <FavoriteButton params={paramsFav}></FavoriteButton>
                </div>
                <div className="address-title">HASH</div>
              </div>
              <div className="address-hash">{resp.data.address}</div>
            </div>
            <div className="card-body">
              <div>
                <div className="row-detail">
                  <div className="item-detail">Transacctions</div>
                  <div className="item-detail">{resp.data.final_n_tx}</div>
                </div>
                <div className="row-detail">
                  <div className="item-detail">Total received</div>
                  <div className="item-detail">
                    {calcPrice(
                      currency.name,
                      resp.data.total_received,
                      currency.value
                    )}{" "}
                    {currency.name}
                  </div>
                </div>
                <div className="row-detail">
                  <div className="item-detail">Total sent</div>
                  <div className="item-detail">
                    {calcPrice(
                      currency.name,
                      resp.data.total_sent,
                      currency.value
                    )}{" "}
                    {currency.name}
                  </div>
                </div>
                <div className="row-detail">
                  <div className="item-detail">Balance</div>
                  <div className="item-detail">
                    {calcPrice(
                      currency.name,
                      resp.data.final_balance,
                      currency.value
                    )}{" "}
                    {currency.name}
                  </div>
                </div>
              </div>
              <div>
                <a
                  href={`/transactions/${resp.data.address}`}
                  className="btn btn-info btn-view"
                >
                  View Transactions
                </a>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <div>
          <div className="search-title">{resp.data}</div>
          <div className="btn-notfound">
            <a href={"/"} className="btn btn-info btn-view">
              Go back
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
