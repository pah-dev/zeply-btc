const apiURL = "https://api.blockcypher.com/v1/btc/main/addrs";
// const apiURL = "https://blockchain.info/rawtx";

export default function getTransAddr(hash) {
  const url = apiURL + `/${hash}/full`;
  return fetch(url)
    .then((res) => res.json())
    .then((response) => {
      const data = response;
      const trans = data.txs;
      return { isLoading: false, data: trans };
    });
}
