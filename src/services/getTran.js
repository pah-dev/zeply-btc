// const apiURL = "https://blockchain.info/rawtx";
const apiURL = "https://api.blockcypher.com/v1/btc/main/txs";

export default function getTran(hash) {
  const url = apiURL + `/${hash}`;
  console.log(hash);
  return fetch(url)
    .then((res) => res.json())
    .then((response) => {
      const data = response;
      console.log(data);
      return { isLoading: false, data: [data] };
    });
}
