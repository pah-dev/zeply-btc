const apiURL = "https://blockchain.info/ticker";
// const apiURL = "https://api.blockcypher.com/v1/btc/main/addrs";

export default function getTicker() {
  const url = apiURL;
  return fetch(url)
    .then((res) => res.json())
    .then((response) => {
      const data = response;
      console.log(data);
      return data;
    });
}
