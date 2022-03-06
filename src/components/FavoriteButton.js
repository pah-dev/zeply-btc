import React, { useState } from "react";

export default function FavoriteButton({ params }) {
  return <FindInitialState params={params} />;
}

function FindInitialState({ params }) {
  let isFav = false;
  const jsonData = localStorage.getItem("zeply-favs");
  const data = JSON.parse(jsonData);
  console.log(data);
  if (data) {
    console.log(params.hash);
    console.log("data");
    const getFav = data.find((e) => e.hash === params.hash);
    console.log(getFav);
    isFav = getFav ? true : false;
    console.log(isFav);
  }
  const newParams = { hash: params.hash, type: params.type, fav: isFav };

  return <SetStateAndToggle params={newParams} />;
}

function SetStateAndToggle({ params }) {
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

  const [favorite, setFavorite] = useState(params.fav);

  const toggleFavorite = (params) => {
    // this sets the state for my selected recipes (adds/ removes)
    // setFavorite((favorite) => {
    //   if (favorite == true) {
    //     console.log("I clicked unfavorite")
    //     console.log(params)
    //     fetch(`/api/users/${params.userId}/recipes/${recipeId}/remove`, { method: 'POST' })
    //     .then(console.log("This was a favorited recipe, but now it isnt!"));

    //   }
    //   if (favorite == false) {
    //     console.log("I clicked favorite")
    //     fetch(`/api/users/${params.userId}/recipes/${recipeId}/add`, { method: 'POST' })
    //     .then(console.log("This was not a favorited recipe. Now it is!"));
    //   }

    setFavorite((favorite) => {
      if (favorite === true) {
        const jsonData = localStorage.getItem("zeply-favs");
        const data = JSON.parse(jsonData);
        data.splice(
          data.findIndex((e) => e.hash === params.hash),
          1
        );
        localStorage.setItem("zeply-favs", JSON.stringify(data));
        console.log(data);
        console.log("This was a favorited recipe, but now it isnt!");
        console.log(params);
      }
      if (favorite === false) {
        const jsonData = localStorage.getItem("zeply-favs");
        const data = JSON.parse(jsonData);
        const date = new Date();
        const newElement = {
          hash: params.hash,
          type: params.type,
          date: date.toString(),
        };
        if (data) {
          console.log("data");
          data.push(newElement);
          localStorage.setItem("zeply-favs", JSON.stringify(data));
        } else {
          localStorage.setItem("zeply-favs", JSON.stringify([newElement]));
        }
        console.log("gaurdadno");
        console.log(data);
        console.log("This was not a favorited recipe. Now it is!");
      }

      return !favorite;
    });
  };

  return (
    <button className="btn-fav" onClick={() => toggleFavorite(params)}>
      {favorite === true ? currentlyAFavorite : notCurrentlyAFavorite}
    </button>
  );
}
