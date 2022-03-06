import moment from "moment";

export default function calcPrice(cur, value, price) {
  var calc = (value / 100000000) * price;
  if (cur === "BTC") {
    return parseFloat(calc).toFixed(6);
  } else {
    return parseFloat(calc).toFixed(2);
  }
}

export function formatDate(strDate) {
  var date = new moment(strDate);
  return date.format("YYYY-MM-DD  hh:mm");
}
