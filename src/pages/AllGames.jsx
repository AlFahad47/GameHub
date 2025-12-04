import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import GameCard from "../components/GameCard";
import { useTitle } from "../hooks/useTitle";
import { motion } from "framer-motion";

const AllGames = () => {
  const data = useLoaderData();
  useTitle("All Games | GameHub");
  const [games, setGames] = useState(data);

  const categories = ["All", ...new Set(data.map((game) => game.category))];
  useEffect(() => {
    setGames(data);
  }, [data]);
  const handleSort = (e) => {
    const sortType = e.target.value;
    const sortedGames = [...games];

    if (sortType === "asc") {
      sortedGames.sort((a, b) => parseFloat(a.ratings) - parseFloat(b.ratings));
    } else if (sortType === "desc") {
      sortedGames.sort((a, b) => parseFloat(b.ratings) - parseFloat(a.ratings));
    }

    setGames(sortedGames);
  };

  const handleFilter = (e) => {
    const category = e.target.value;
    if (category === "All") {
      setGames(data);
    } else {
      const filtered = data.filter((game) => game.category === category);
      setGames(filtered);
    }
  };
  return (
    <div>
      <h2 className="text-center text-primary-content font-bold lg:text-4xl md:text-4xl text-3xl mt-10">
        All Available Games
      </h2>
      <div className="flex flex-col md:flex-row  items-center justify-between mt-8  max-w-[1460px] mx-auto px-4">
        {/* filter*/}
        <select
          onChange={handleFilter}
          className="select select-bordered w-full max-w-xs  text-primary-content bg-base-200 border-gray-600 focus:outline-none md:mb-0 mb-5"
        >
          <option disabled selected>
            Filter by Genre
          </option>
          {categories.map((cat, index) => (
            <option key={index} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        {/* sort */}
        <select
          onChange={handleSort}
          className="select select-bordered w-full max-w-xs  text-primary-content bg-base-200 border-gray-600 focus:outline-none"
        >
          <option disabled selected>
            Sort by Rating
          </option>
          <option value="asc">Rating: Low to High</option>
          <option value="desc">Rating: High to Low</option>
        </select>
      </div>
      <motion.div
        key={games.length}
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
        initial="hidden"
        animate="show"
        className="grid lg:grid-cols-4 md:grid-cols-2 gap-x-10 gap-y-10 my-10 justify-items-center max-w-[1440px] mx-auto px-4"
      >
        {games.length > 0 ? (
          games.map((game) => <GameCard key={game._id} game={game}></GameCard>)
        ) : (
          <p className="text-white text-xl col-span-full">No games found.</p>
        )}
      </motion.div>
    </div>
  );
};

export default AllGames;
