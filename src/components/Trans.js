import { useEffect, useState, useContext } from "react";
import AppContext from "../context/AppContext";
import Spinner from "./Spinner";
import Search from "./Search";
import FavoriteButton from "../components/FavoriteButton";
import getTran from "../services/getTran";
import getTransAddr from "../services/getTransAddr";
import calcPrice, { formatDate } from "../services/tools";
import setVisit from "../services/setVisit";

export default function Trans({ params }) {
  const [resp, setTx] = useState({ isLoading: true, data: [] });
  const { currency } = useContext(AppContext);

  let onlyTran = false;

  if (params.hash) {
    onlyTran = true;
  }

  const paramsFav = (hash) => {
    return { hash: hash, type: "T" };
  };

  useEffect(
    function () {
      if (params.hash) {
        getTran(params.hash).then((resp) => setTx(resp));
        setVisit(params.hash, "T");
      } else {
        getTransAddr(params.addr).then((resp) => setTx(resp));
      }
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
    <div data-testid="trans-element" className="app-component">
      {onlyTran ? <Search></Search> : ""}
      <div className="separator"></div>
      <div className="result-title">TRANSACTIONS</div>
      <div className="separator"></div>
      {resp.data && !resp.data[0].error ? (
        <section className="address-content">
          {resp.data.map((trans) => (
            <div className="card bg-dark border-info address-card">
              <div className="card-header">
                <div>
                  <div className="address-fav">
                    <FavoriteButton
                      params={paramsFav(trans.hash)}
                    ></FavoriteButton>
                  </div>
                  <div className="address-title">HASH</div>
                </div>
                <div className="address-hash">{trans.hash}</div>
              </div>
              <div className="card-body">
                <div>
                  <div className="row-detail">
                    <div className="item-detail">Recieved</div>
                    <div className="item-detail">
                      {formatDate(trans.received)}
                    </div>
                  </div>
                  <div className="row-detail">
                    <div className="item-detail">Status</div>
                    <div className="item-detail">
                      {trans.confirmed ? "Confirmed" : "Pending"}
                    </div>
                  </div>
                  <div className="row-detail">
                    <div className="item-detail">Size</div>
                    <div className="item-detail">{trans.size}</div>
                  </div>
                  <div className="row-detail">
                    <div className="item-detail">Confirmations</div>
                    <div className="item-detail">{trans.confirmations}</div>
                  </div>
                  <div className="row-detail">
                    <div className="item-detail">Total input</div>
                    <div className="item-detail">
                      {calcPrice(
                        currency.name,
                        trans.total + trans.fees,
                        currency.value
                      )}{" "}
                      {currency.name}
                    </div>
                  </div>
                  <div className="row-detail">
                    <div className="item-detail">Total output</div>
                    <div className="item-detail">
                      {calcPrice(currency.name, trans.total, currency.value)}{" "}
                      {currency.name}
                    </div>
                  </div>
                  <div className="row-detail">
                    <div className="item-detail">Fees</div>
                    <div className="item-detail">
                      {calcPrice(currency.name, trans.fees, currency.value)}{" "}
                      {currency.name}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>
      ) : (
        <div>
          <div className="search-title">{resp.data[0].error}</div>
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
