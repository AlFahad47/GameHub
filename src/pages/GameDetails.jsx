import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import { useTitle } from "../hooks/useTitle";

const GameDetails = () => {
  const { id } = useParams();
  const data = useLoaderData();

  useTitle("Game Details | GameHub");

  const [game, setGame] = useState({});
  useEffect(() => {
    const filteredGame = data.find((g) => g.id == id);
    // console.log(filteredGame)
    setGame(filteredGame);
  }, []);
  return (
    <div className="flex lg:flex-row flex-col-reverse  justify-between items-center w-11/12 mx-auto mt-10">
      <div className="flex-1 ">
        <h2 className="font-bold text-4xl mb-9">{game.title}</h2>
        <p className="mb-2.5">{game.description}</p>
        <div>
          <h2 className="mb-2.5">
            developer:{" "}
            <span className="font-semibold italic">{game.developer}</span>
          </h2>
          <p>Category: {game.category}</p>
        </div>
        <div className="flex items-center justify-between mb-5">
          <h2>{game.ratings}</h2>
          <a href={game.downloadLink} className="btn btn-primary bg-red-600">
            Download
          </a>
        </div>
      </div>
      <div className="flex-1 flex justify-end">
        <img className="h-96 rounded-xl mb-5" src={game.coverPhoto} alt="" />
      </div>
    </div>
  );
};

export default GameDetails;
