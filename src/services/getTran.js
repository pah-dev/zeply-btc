const apiURL = "https://api.blockcypher.com/v1/btc/main/txs";
// const apiURL = "https://blockchain.info/rawtx";

export default function getTran(hash) {
  const url = apiURL + `/${hash}`;
  return fetch(url)
    .then((res) => res.json())
    .then((response) => {
      const data = response;
      return { isLoading: false, data: [data] };
    });
}
