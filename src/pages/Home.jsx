import Banner from "../components/Banner";
import { useLoaderData } from "react-router";
import GameCard from "../components/GameCard";
import gameLogo from "../assets/gamelogo.png";
import { useTitle } from "../hooks/useTitle";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import { useState } from "react";

const developers = [
  {
    id: 1,
    name: "IndieDev One",
    avatar: "https://i.pravatar.cc/150?img=1",
    bio: "Loves creating RPG games with unique storylines.",
  },
  {
    id: 2,
    name: "Pixel Studio",
    avatar: "https://i.pravatar.cc/150?img=2",
    bio: "Specializes in pixel art platformers and adventure games.",
  },
  {
    id: 3,
    name: "GameSmith",
    avatar: "https://i.pravatar.cc/150?img=3",
    bio: "Passionate about crafting challenging puzzle games.",
  },
];

const testimonials = [
  {
    id: 1,
    name: "Alice",
    feedback:
      "GameHub is my favorite platform to discover amazing indie games!",
  },
  {
    id: 2,
    name: "Bob",
    feedback:
      "I found so many hidden gems thanks to GameHub. Highly recommend!",
  },
  {
    id: 3,
    name: "Charlie",
    feedback: "The interface is clean and easy to use. Loving it!",
  },
];

const Home = () => {
  const data = useLoaderData();
  useTitle("Home | GameHub");

  const [formData, setFormData] = useState({
    email: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Message sent successfully!");
    setFormData({ email: "" });
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <Banner />
      <div id="new-games" className="scroll-mt-20">
        <h2 className="mt-10 font-bold text-xl md:text-2xl lg:text-4xl text-center text-primary-content">
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
      </div>

      {/* Featured Developers Section */}
      <div
        id="developers"
        className="scroll-mt-20 mt-10 lg:max-w-[1090px] w-11/12 mx-auto"
      >
        <h2 className="text-center font-bold text-3xl text-primary-content mb-8">
          Featured Developers
        </h2>
        <div className="flex flex-wrap lg:justify-between justify-center gap-6">
          {developers.map((dev) => (
            <div
              key={dev.id}
              className="bg-[#DC2626] p-6 rounded-2xl shadow-lg max-w-[340px] text-center"
            >
              <img
                src={dev.avatar}
                alt={dev.name}
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-white">{dev.name}</h3>
              <p className="text-gray-300 text-sm mt-2">{dev.bio}</p>
            </div>
          ))}
        </div>
      </div>

      {/* testimonials section */}
      <div
        id="testimonials"
        className="scroll-mt-20 mt-10 lg:max-w-[1090px] w-11/12 mx-auto"
      >
        <h2 className="text-center font-bold text-3xl text-primary-content mb-8 ">
          User Reviews
        </h2>
        <div className="flex flex-wrap lg:justify-between justify-center gap-6">
          {testimonials.map((test) => (
            <div
              key={test.id}
              className="bg-[#DC2626] p-6 rounded-2xl shadow-lg max-w-[340px]  text-center"
            >
              <p className="text-gray-300 italic">"{test.feedback}"</p>
              <h4 className="text-white font-semibold mt-4">{test.name}</h4>
            </div>
          ))}
        </div>
      </div>
      {/* news letter section */}
      <div className="scroll-mt-20 mt-10" id="subscribe">
        <div className="flex lg:flex-row flex-col justify-between items-center lg:max-w-[1090px]  w-11/12 mx-auto  bg-[#DC2626] p-10 rounded-2xl relative z-5 -mb-56   border-white/30 border-3 shadow-lg lg:px-30">
          <img
            className="lg:max-h-[350px] md:max-h-[300px] max-h-[250px] mb-5"
            src={gameLogo}
            alt=""
          />
          <div className=" text-white/80 ">
            <h2 className="font-bold lg:text-3xl md:text-3xl text-xl mb-2">
              Subscribe for Newsletter
            </h2>
            <p className="text-[14px] lg:text-xl md:text-xl">
              Join our mailing list to get quick updates...
            </p>
            <form
              className="flex gap-3 mt-10 "
              onSubmit={(e) => handleSubmit(e)}
            >
              <input
                className="input text-primary-content"
                type="email"
                required
                action=""
                name="email"
                value={formData.email}
                onChange={handleChange}
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
