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
    <div className="flex lg:flex-row flex-col-reverse lg:my-30 justify-between items-center w-11/12 mx-auto mt-10 text-white">
      <div className="flex-1 ">
        <h2 className="font-bold text-4xl mb-7">{game.title}</h2>
        <hr class=" border-white my-5" />

        <p className="mb-2.5">{game.description}</p>

        <div>
          <h2 className="mb-2.5">
            Developed by{" "}
            <span className="font-semibold italic text-red-500">
              {game.developer}
            </span>
          </h2>
          <hr class=" border-white my-5" />
          <p>Category: {game.category}</p>
        </div>
        <div className="flex items-center justify-between mb-5">
          <h2>{game.ratings}</h2>
          <a
            href={game.downloadLink}
            className="bg-red-700 text-white px-4 py-2 rounded-md font-semibold cursor-pointer"
          >
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
