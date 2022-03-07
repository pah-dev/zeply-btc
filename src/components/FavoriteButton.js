import React, { useState } from "react";
import FlashMessage from "react-flash-message";

export default function FavoriteButton({ params }) {
  return <FindInitialState params={params} />;
}

function FindInitialState({ params }) {
  let isFav = false;
  const jsonData = localStorage.getItem("zeply-favs");
  const data = JSON.parse(jsonData);
  if (data) {
    const getFav = data.find((e) => e.hash === params.hash);
    isFav = getFav ? true : false;
  }
  const newParams = { hash: params.hash, type: params.type, fav: isFav };

  return <SetStateAndToggle params={newParams} />;
}

function SetStateAndToggle({ params }) {
  const [message, setMessage] = useState("");
  const [favorite, setFavorite] = useState(params.fav);
  const currentlyAFavorite = (
    <img
      className="drop-img"
      src="/fav-icon-act.svg"
      width="25px"
      height="25px"
      alt="no"
    />
  );
  const notCurrentlyAFavorite = (
    <img
      className="drop-img"
      src="/fav-icon.svg"
      width="25px"
      height="25px"
      alt="no"
    />
  );

  const toggleFavorite = (params) => {
    setFavorite((favorite) => {
      const jsonData = localStorage.getItem("zeply-favs");
      const data = JSON.parse(jsonData);
      if (favorite === true) {
        let newData = data.filter((e) => e.hash !== params.hash);
        localStorage.setItem("zeply-favs", JSON.stringify(newData));
      }
      if (favorite === false) {
        const date = new Date();
        const newElement = {
          hash: params.hash,
          type: params.type,
          date: date.toString(),
        };
        if (data) {
          data.push(newElement);
          localStorage.setItem("zeply-favs", JSON.stringify(data));
        } else {
          localStorage.setItem("zeply-favs", JSON.stringify([newElement]));
        }
        setMessage("Subscribed to address " + params.hash);
      }

      return !favorite;
    });
  };

  return (
    <div>
      {message !== "" ? (
        <FlashMessage duration={2000} persistOnHover={true}>
          <div className="alert alert-info alert-fav" role="alert">
            {message}
          </div>
        </FlashMessage>
      ) : (
        <div></div>
      )}
      <button className="btn-fav" onClick={() => toggleFavorite(params)}>
        {favorite === true ? currentlyAFavorite : notCurrentlyAFavorite}
      </button>
    </div>
  );
}
