import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const JustBerry = () => {
  let { name } = useParams();
  const [pokeData, setPokeData] = useState("");

  const fetchBerry = async () => {
    // Get berry item url
    let rawBerryData = await fetch(`https://pokeapi.co/api/v2/berry/${name}`);
    let berryData = await rawBerryData.json();

    // Call berry item url to get the image
    let itemUrl = berryData.item.url;
    let rawItemData = await fetch(itemUrl);
    let itemData = await rawItemData.json();

    setPokeData(itemData);
  };

  useEffect(
    () => {
      fetchBerry();
    },
    // only run on component did mount
    []
  );

  return (
    <div>
      {pokeData ? (
        <div>
          <h1>Just a berry named {name} </h1>
          <img src={pokeData.sprites.default} alt="poke item" />
        </div>
      ) : (
        <div>
          <h1>Loading...</h1>
        </div>
      )}
    </div>
  );
};

export default JustBerry;
