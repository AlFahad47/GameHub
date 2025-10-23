import Banner from "../components/Banner";
import { useLoaderData } from "react-router";
import GameCard from "../components/GameCard";
import gameLogo from "../assets/gamelogo.png";
import { useTitle } from "../hooks/useTitle";
import { motion } from "framer-motion";

const Home = () => {
  const data = useLoaderData();
  useTitle("Home | GameHub");
  return (
    <div>
      <Banner />
      <h2 className="mt-10 font-bold text-xl md:text-2xl lg:text-4xl text-center">
        Popular Games
      </h2>
      <motion.div
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
        initial="hidden"
        animate="show"
        className="flex flex-wrap lg:gap-8 md:gap-3 gap-2 justify-center mt-3 lg:mt-5 w-11/12 mx-auto"
      >
        {data
          .sort((a, b) => parseFloat(b.ratings) - parseFloat(a.ratings))
          .slice(0, 3)
          .map((game) => (
            <GameCard key={game.id} game={game}></GameCard>
          ))}
      </motion.div>
      {/* new letter section */}
      <div className=" ">
        <div className="flex lg:flex-row flex-col justify-between items-center lg:w-9/12 w-11/12 mx-auto mt-10 bg-[#8E1616] p-10 rounded-2xl relative z-10 -mb-56   border-white/30 border-3 shadow-lg lg:px-30">
          <img
            className="lg:max-h-[350px] md:max-h-[300px] max-h-[250px] mb-5"
            src={gameLogo}
            alt=""
          />
          <div className=" text-white/80">
            <h2 className="font-bold lg:text-3xl md:text-3xl text-xl mb-2">
              Subscribe for Newsletter
            </h2>
            <p className="text-[14px] lg:text-xl md:text-xl">
              Join our mailing list to get quick updates...
            </p>
            <form
              className="flex gap-3 mt-10 "
              action=""
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                className="input text-black"
                type="email"
                placeholder="Enter your email"
              />
              <button className="bg-red-700 text-white px-4 py-2 rounded-md font-semibold cursor-pointer">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="bg-[#0B0B0B] min-h-56"></div>
    </div>
  );
};

export default Home;
