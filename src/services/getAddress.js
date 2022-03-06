// const apiURL = "https://blockchain.info/rawaddr";
const apiURL = "https://api.blockcypher.com/v1/btc/main/addrs";

export default function getAddress(addr) {
  const url = apiURL + `/${addr}/balance`;
  return fetch(url)
    .then((res) => res.json())
    .then((response) => {
      const data = response;
      console.log(data);
      return { isLoading: false, data: data };
    });
}
// TODO: AGREGAR CATCH PARA SACAR LOS DIFF ERRORES NO SIEMPRE TRAE LA MISMA ESTRUCTURA
