import image1 from "../images/landscape1.jpg";
import image2 from "../images/landscape2.jpg";
import image3 from "../images/landscape3.jpg";
import image4 from "../images/landscape4.jpg";
import image5 from "../images/landscape5.jpg";
import image6 from "../images/landscape6.jpg";

const PlayGame = () => {
  const Games = [
    {
      title1: "RISING OF THE SHIELD HERO GAME",
      title2: "Inspired by Rising of the Shield Hero - Isekai",
      image: image1,
    },
    {
      title1: "Play Overlord Tomb of Nazarick",
      title2: "Inspired by Overlord the Isekai anime with Ainz",
      image: image2,
    },
    {
      title1: "Echoverse 2077 - Cybernetic AI",
      title2: "Inspired by Cyberpunk 2077 an Isekai anime show",
      image: image3,
    },
    {
      title1: "Play Eragon - Rise of Dragons",
      title2: "Inspired by the book Eragon by Christopher Paolini",
      image: image4,
    },
    {
      title1: "Play ShadowMon Monster Catcher",
      title2: "Inspired by Pokemon and other Monster Catcher RPGs",
      image: image5,
    },
    {
      title1: "Play Echoverse Online Now",
      title2: "CInspired by 15+ Animes, planets based on each.",
      image: image6,
    },
  ];
  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-5">
      {Games.map((game, index) => (
        <div key={index} className="px-4 pt-10">
          <div className="relative flex items-center justify-center h-[437px] w-96 overflow-hidden group">
            <div
              className="w-full absolute inset-0 bg-cover bg-center transition-transform duration-300 ease-in-out scale-100 group-hover:scale-110"
              style={{ backgroundImage: `url(${game.image})` }}
            ></div>
            <p className="absolute z-10 righteous-42 text-white font-bold transition-transform duration-300 transform scale-100 group-hover:scale-90">
              {game.title1.toUpperCase()}
            </p>
            <p className="absolute bottom-0 mb-4 josefin-font text-white transition-all duration-300 transform translate-y-24 group-hover:translate-y-0">
              {game.title2}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PlayGame;
