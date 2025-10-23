import React from "react";
import { useLoaderData } from "react-router";
import GameCard from "../components/GameCard";
import { useTitle } from "../hooks/useTitle";
import { motion } from "framer-motion";

const AllGames = () => {
  const data = useLoaderData();
  useTitle("All Games | GameHub");
  return (
    <div>
      <h2 className="text-center text-white font-bold lg:text-4xl md:text-4xl text-3xl mt-10">
        All Available Games
      </h2>
      <motion.div
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
        className="grid lg:grid-cols-4 md:grid-cols-2  gap-x-10 gap-y-10 my-10 justify-items-center max-w-[1440px] mx-auto"
      >
        {data.map((game) => (
          <GameCard game={game}></GameCard>
        ))}
      </motion.div>
    </div>
  );
};

export default AllGames;
