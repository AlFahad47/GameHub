import Banner from "../components/Banner";
import { useLoaderData } from "react-router";
import GameCard from "../components/GameCard";
import gameLogo from "../assets/gamelogo.png";
import { useTitle } from "../hooks/useTitle";

const Home = () => {
  const data = useLoaderData();
  useTitle("Home | GameHub");
  return (
    <div>
      <Banner />
      <h2 className="mt-10 font-bold text-xl md:text-2xl lg:text-4xl text-center">
        Popular Games
      </h2>
      <div className="flex flex-wrap lg:gap-8 md:gap-3 gap-2 justify-center mt-3 lg:mt-5 w-11/12 mx-auto">
        {data
          .sort((a, b) => parseFloat(b.ratings) - parseFloat(a.ratings))
          .slice(0, 3)
          .map((game) => (
            <GameCard key={game.id} game={game}></GameCard>
          ))}
      </div>
      {/* new letter section */}
      <div className="flex lg:flex-row flex-col justify-between items-center lg:w-9/12 w-11/12 mx-auto mt-10">
        <img
          className="lg:max-h-[550px] md:max-h-[400px] max-h-[250px] mb-5"
          src={gameLogo}
          alt=""
        />
        <div className="">
          <h2 className="font-bold text-3xl mb-2">Sign up for newletter</h2>
          <p>Join our mailing list to get quick updates...</p>
          <form className="flex gap-3 mt-10 " action="">
            <input className="input" type="text" />
            <button className="btn btn-primary bg-red-500">Subscribe</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
