const apiURL = "https://api-data-rctrl.herokuapp.com/api/v1/address";

export default function getTop(key) {
  let part = "";
  if (key === "A") {
    part = "/topaddr";
  } else {
    part = "/toptxs";
  }
  const url = apiURL + part;
  return fetch(url)
    .then((res) => res.json())
    .then((response) => {
      const data = response;
      console.log(data);
      return data;
    });
}
