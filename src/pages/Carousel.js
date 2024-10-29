import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../images/AI.jpg";
import image2 from "../images/chat gpt.jpg";
import image3 from "../images/IT.jpg";
import image4 from "../images/our culture.jpg";
import image5 from "../images/our team.jpg";

const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1450,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const articles = [
    {
      date: "October 26, 2024",
      title: "The Ticker Is Eth: Reviving Blockchain Spirit",
      image: image1,
    },
    {
      date: "October 25, 2024",
      title: "How to Play Black Ops 6 a Day Early on Xbox and",
      image: image2,
    },
    {
      date: "October 3, 2024",
      title: "Gacha Genie: Revolutionizing Gacha Game",
      image: image3,
    },
    {
      date: "September 2, 2024",
      title: "Advancing Game Design with AI - The Future of Text-",
      image: image4,
    },
    {
      date: "August 31, 2024",
      title: "Can you play games in ChatGPT? Yes",
      image: image5,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto py-8">
      <div>
        <p className="righteous-42 py-10 text-center px-16 text-white">
          {`Shadowthorn Studios Game News and Information for ChatGPT`.toUpperCase()}
        </p>
      </div>
      <Slider {...settings}>
        {articles.map((article, index) => (
          <div key={index} className="px-4 pt-10">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={article.image}
                alt={article.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-4">
                <p className="text-sm text-gray-500">{article.date}</p>
                <h3 className="text-lg font-semibold text-gray-800">
                  {article.title}
                </h3>
                <a
                  href="#"
                  className="mt-2 inline-block text-sm text-[#5d3c30] hover:underline"
                >
                  Continue Reading
                </a>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
