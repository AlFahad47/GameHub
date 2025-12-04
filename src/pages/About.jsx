import React from "react";
import {
  FaGamepad,
  FaUsers,
  FaCode,
  FaEnvelope,
  FaLock,
  FaCookieBite,
} from "react-icons/fa";
import { Link } from "react-router";

const About = () => {
  const about = [
    {
      title: "Our Mission",
      des: " Our mission is to empower indie game developers by providing them with a platform to showcase their work while offering gamers a curated library of high-quality indie games to explore and enjoy.",
    },

    {
      title: "Technology",
      des: " GameHub is built with modern web technologies including React, Tailwind CSS, DaisyUI, Firebase, and Framer Motion to provide a fast, responsive, and interactive experience.",
    },
    {
      title: "Privacy",
      des: " At GameHub, we respect your privacy. We collect only the information necessary to provide a better user experience, including registration details, profile information, and usage data. We do not sell or share your personal data with third parties for marketing purposes.",
    },
    {
      title: "Legal",
      des: " All content on GameHub, including games, text, images, and logos, is the property of GameHub or its respective owners. Users are prohibited from reproducing, distributing, or using the content without permission. By using GameHub, you agree to comply with all applicable laws and regulations.",
    },
  ];
  return (
    <div className="min-h-screen bg-primary text-primary-content py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl text-[#DC2626] font-bold  mb-4">
            About GameHub
          </h1>
          <p className="text-lg ">
            GameHub is your go-to platform for discovering and supporting indie
            game developers worldwide. Browse, download, and support your
            favorite indie games all in one place.
          </p>
        </div>

        {/* all  Section */}

        {about.map((a) => (
          <div
            id={`${a.title}`}
            className="scroll-mt-20 mb-12 bg-[#DC2626] p-8 rounded-2xl shadow-lg"
          >
            <div className="flex items-center mb-4">
              <FaGamepad className="text-white text-3xl mr-3" />
              <h2 className="text-2xl font-semibold text-white">{a.title}</h2>
            </div>
            <p className="text-white">{a.des}</p>
          </div>
        ))}

        {/* Legal & Privacy Section */}
        <div className="mb-12 bg-[#DC2626] p-8 rounded-2xl shadow-lg">
          <div className="flex items-center mb-4">
            <FaCookieBite className="text-white text-3xl mr-3" />
            <h2 className="text-2xl font-semibold text-white">
              Cookie Settings & Policy
            </h2>
          </div>

          {/* Cookie Settings */}
          <div id="cookieSettings" className="mb-6 scroll-mt-20">
            <h3 className="text-xl font-semibold text-white mb-2">
              Cookie Settings
            </h3>
            <p className="text-white">
              GameHub uses cookies to enhance your browsing experience, remember
              your preferences, and analyze site usage. You can adjust your
              cookie preferences anytime through your account settings or your
              browser settings.
            </p>
          </div>

          {/* Cookie Policy */}
          <div id="cookiePolicy" className="mb-6 scroll-mt-20">
            <h3 className="text-xl font-semibold text-white mb-2">
              Cookie Policy
            </h3>
            <p className="text-white">
              Our cookie policy explains how and why we use cookies on GameHub.
              Cookies help us personalize content, provide social media
              features, and analyze traffic to improve our services. By using
              GameHub, you consent to the use of cookies in accordance with this
              policy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
