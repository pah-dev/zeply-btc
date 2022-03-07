const apiURL = "https://api.blockcypher.com/v1/btc/main/addrs";
// const apiURL = "https://blockchain.info/rawaddr";

export default function getAddress(addr) {
  const url = apiURL + `/${addr}/balance`;
  return fetch(url)
    .then((res) => res.json())
    .then((response) => {
      const data = response;
      return { isLoading: false, data: data };
    });
}
