const apiURL = "https://blockchain.info/ticker";

export default function getTicker() {
  const url = apiURL;
  return fetch(url)
    .then((res) => res.json())
    .then((response) => {
      const data = response;
      return data;
    });
}
