const apiURL = "https://api-data-rctrl.herokuapp.com/api/v1/address";

export default function setVisit(hash, key) {
  const data = [{ hash: hash, type: key }];
  const url = apiURL + "/update/0";

  fetch(url, {
    crossDomain: true,
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
}
