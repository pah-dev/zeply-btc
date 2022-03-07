export default function getFavs(key) {
  const jsonData = localStorage.getItem("zeply-favs");
  const data = JSON.parse(jsonData);
  let newData = [];
  if (data) {
    newData = data.filter((e) => e.type === key);
  }
  return newData;
}
