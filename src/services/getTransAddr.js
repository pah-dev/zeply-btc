// const apiURL = "https://blockchain.info/rawtx";
const apiURL = "https://api.blockcypher.com/v1/btc/main/addrs";

export default function getTransAddr(hash) {
  const url = apiURL + `/${hash}/full`;
  console.log(hash);
  return fetch(url)
    .then((res) => res.json())
    .then((response) => {
      const data = response;
      const trans = data.txs;
      console.log(data.txs);
      return { isLoading: false, data: trans };
    });
}
