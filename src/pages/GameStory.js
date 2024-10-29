import React, { useState } from "react";
import image1 from "../images/our vision.jpg";
import image2 from "../images/our team.jpg";
import image3 from "../images/our culture.jpg";
import image4 from "../images/grid-img1.jpg";
import image5 from "../images/grid-img2.jpg";
import image6 from "../images/grid-img3.jpg";
import image7 from "../images/IT.jpg";
import image8 from "../images/chat gpt.jpg";
import image9 from "../images/AI.jpg";

const GameStory = () => {
  const stories = [
    {
      title: "Our Vision",
      description:
        "At ShadowThorn Studios Games, we believe that video games have the power to inspire, connect and entertain people across the world. Our vision is to create games that bring their imagination to life, and leave a lasting impact on their lives.",
      image: image1,
      btnContent: "Learn About The CEO - Tokin Trip",
    },
    {
      title: "Our Team",
      description:
        "Our Team consists of Tokin Trip, Rosca Santigria, and a multitude of ChatGPT Custom Agents.",
      image: image2,
      btnContent: "Learn More about Vice President Rosca Santigria",
    },
    {
      title: "Our Culture",
      description:
        "At ShadowThorn Studios Games, we value creativity, innovation, and collaboration. We believe that great ideas can come from anywhere, and we encourage our team members to share their thoughts and opinions freely. We also believe in maintaining a healthy work-life balance to ensure that our team stays motivated and productive. We want to bring games to life showcasing the potential of games of the future with AI-Infused Games.",
      image: image3,
      btnContent: "Catch Your Favorite ShadowMon",
    },
    {
      title: "AI Companions and Battle Pets, What they are and how they evolve",
      description:
        "We believe in bringing games to life here at ShadowThorn Studios and one of the best ways we feel we can do that is theough the immersive AI-Infusion of Ai Companions and Battle Pets in game Woelds. Pets and Companions that not only level with you hut grow along side you, imagining new skills and abilities, growing based off of your interaction with them and how you interact with them in the games.",
      image: image4,
      btnContent:
        "Read About AI Companions and Battle Pets in AI-Infused Game Worlds",
    },
    {
      title:
        "Did you like Altered Carbon? Check out why you'll love Age of the Envoy",
      description:
        "Age of the Envoy is not just a game. It’s an immersive experience that artfully combines elements from RPGs, text-based games, and various other genres to create a rich and engaging narrative. Drawing from the world-building and strategic depth of civilization builders, the immersive storytelling of text-based adventures, and the high-stakes drama of space battle and interplanetary conflict games, Age of the Envoy offers a futuristic RPG that captivates players from start to finish.",
      image: image5,
      btnContent: "Read About Age of The Envoy",
    },
    {
      title:
        "Explore the Universe of your imagination in the best isekai space game ever imagined, Echoverse Online",
      description:
        "In the ever-evolving world of isekai games, Echoverse Online stands out as a groundbreaking text-based RPG that blends the magic of isekai anime with innovative gameplay mechanics. Developed by ShadowThorn Studios, this space adventure game is not just another RPG; it’s a dynamic, AI-driven experience that offers players endless possibilities. From its unique reincarnation mechanics to the intriguing Grim Reaper Planet, Echoverse Online is redefining what it means to be an isekai game in the modern era.",
      image: image6,
      btnContent: "Read About The Ultimate Isekai Space Game",
    },
    {
      title:
        "What does Information Technology (IT) have to do with Project Management?",
      description:
        "The integration of IT into project management has evolved from an alternative to an imperative that enables organizations to keep their heads above the water and competitive, at the same time remaining productive and at the edge. Utilizing cutting-edge project management tools like a Pocket Project Manager Assistant can be crucial to adapting ahead of the curve of the industry and making sure your teams have the best chance for success right in their pocket!",
      image: image7,
      btnContent:
        "So do you want to know everything Information Technology has to do with Project Management?",
    },
    {
      title:
        "Can you Play Games in ChatGPT? Yes. Here's a List of The Best Chat GPT Games of 2024",
      description:
        "The easiest way to play any ChatGPT infused game from ShadowThorn Studios is to click on any of the links provided below. These browser-based games require no downloads and can be played instantly. The games are designed to be user-friendly, with intuitive controls and tutorials",
      image: image8,
      btnContent: "Everything you need to know and more about ChatGPT Games",
    },
    {
      title:
        "How can AI make better games? Can combining multiple AIs be beneficial?",
      description:
        "ShadowThorn Studios is at the forefront of game innovation, exploring the cutting-edge integration of AI technologies like ChatGPT and Stable Diffusion to revolutionize text-based games. Our latest article delves into how these advancements are transforming narrative-driven experiences into fully imagined worlds, enhancing player engagement, and setting new standards in game design. Join us as we push the boundaries of what's possible in the gaming industry, creating dynamic, immersive environments that redefine how stories are told and experienced.",
      image: image9,
      btnContent: "How Can ChatGPT adapt to have games with visuals?",
    },
  ];

  const [showMore, setShowMore] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  return (
    <div>
      <div className="max-w-7xl mx-auto py-8">
        <p className="righteous-42 py-8 text-center px-16 text-[#725346]">
          {`ShadowThorn Studios Games Story`.toUpperCase()}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-40 2xl:px-80 gap-8">
        {stories.map((story, index) => (
          <div key={index}>
            <div className="flex flex-col items-center text-center">
              <div className="rounded-full overflow-hidden mb-4">
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <h2 className="text-xl font-semibold text-gray-800 josefin-font">
                {story.title}
              </h2>
              <p className="text-gray-600 mt-4 josefin-AI-Content pb-5">
                <div>
                  {showMore[index]
                    ? story.description
                    : `${story.description.substring(0, 250)}`}
                </div>
                {story.description.length > 250 ? (
                  <>
                    <button
                      onClick={() => {
                        setShowMore(!showMore[index]);
                      }}
                    >
                      {showMore[index] ? "- Show Less" : "+ Show More"}
                    </button>
                  </>
                ) : (
                  <></>
                )}
              </p>
              <button className="bg-black hover:bg-[#262626] josefin-button text-slate-50">
                {story.btnContent}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameStory;
