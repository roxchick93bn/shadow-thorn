import Header from "./Header";
import Carousel from "./Carousel";
import GameStory from "./GameStory";
import PlayGame from "./PlayGame";
import Contact from "./Contact";
import SocailLinks from "./SocialLinks";
import Subscribe from "./Subscribe";
import Footer from "./Footer";
import Video from "./Video";
import ShadowThorn from "../images/Shadow Thorn.jpg";
import AIAgent from "../images/AI agent.jpg";
import DiscoverMagic from "../images/dicover magic.jpg";
import background from "../images/slider-background.jpg";

const Landing = () => {
  return (
    <>
      <Header />
      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div>
            <img src={ShadowThorn} alt="" />
          </div>
          <div className="bg-black text-center place-content-center px-32">
            <p className="righteous-regular pb-3 text-[#F7F7F7]">
              Unleash Your Imagination
            </p>
            <p className="josefin-font text-[#A9A9A9] pb-3">
              At ShadowThorn Studios, we specialize in bringing games to life
              with AI-Infused games built in ChatGPT #bringyourgametolife
            </p>
            <button className="bg-white hover:bg-[#E9E9E9] josefin-button text-black mb-4">
              Your Pocket Project Manager Assistant
            </button>
            <button className="bg-white hover:bg-[#E9E9E9] josefin-button text-black">
              Play An Altered Carbon Inspired Game
            </button>
          </div>
        </div>
      </div>
      <div className="justify-center place-content-center text-center py-10">
        <p className="righteous-42 text-[#725346] pb-10">
          {`ShadowThorn Studios Custom AI Agents`.toUpperCase()}
        </p>
        <div className="place-items-center pb-10">
          <img className="" src={AIAgent} alt="" />
        </div>
        <p className="josefin-AI pb-8">AI-Powered Project Management Agents</p>
        <p className="josefin-AI-Content px-40 lg:px-80 pb-8">
          ShadowThorn Studios offers a range of AI-powered project management
          agents to help you navigate your company, projects, and teams with a
          virtual project manager. Our agents cover a variety of industries and
          can assist with all your project management needs.
        </p>
        <button className="bg-black hover:bg-[#262626] josefin-button text-slate-50">
          Your Pocket Project Manager Assistant
        </button>
      </div>
      <div className="justify-center place-content-center text-center py-10 bg-[#F6F6F6]">
        <p className="righteous-42 text-[#725346] pb-10">
          {`Echoverse Online by ShadowThorn Studios`.toUpperCase()}
        </p>
        <p className="josefin-AI-Content px-40 lg:px-96 pb-8">
          This Video reaks down some of the features and functions of Echoverse
          Online with its adaptive gameplay, evolving skills, and infinite
          planet landscape the game grows with you!
        </p>
        <div className="place-items-center px-40 lg:px-96 pb-10"><Video /></div>
      </div>
      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div>
            <img className="w-screen" src={DiscoverMagic} alt="" />
          </div>
          <div className="px-10 py-8 content-end">
            <p className="josefin-AI-Content pb-3">
              Isekai Games, Monster Catcher Games, RPG and Survival Games
            </p>
            <p className="righteous-regular pb-3 text-[#1B1B1B]">
              {`Discover the Magic of ShadowThorn Studios Games Gaming`.toUpperCase()}
            </p>
            <p className="josefin-font text-[#A9A9A9] pb-3">
              Step into a world of wonder and excitement with ShadowThorn
              Studios Games Gaming. Our immersive video games transport you to
              new worlds filled with adventure, mystery, and magic. Join us on a
              journey unlike any other and experience the thrill of gaming like
              never before.
            </p>
            <button className="bg-black hover:bg-[#262626] josefin-button text-slate-50">
              Play a Shangri-La Frontier Inspired Game
            </button>
          </div>
        </div>
      </div>
      <div className="bg-[#F6F6F6]">
        <div className="justify-center place-content-center text-center py-10 bg-[#F6F6F6] max-w-7xl mx-auto">
          <p className="righteous-42 text-[#725346] pb-10 ">
            {`Play Games by ShadowThorn Studios. All games are built inside
            ChatGPT.`.toUpperCase()}
          </p>
          <PlayGame />
        </div>
      </div>
      <div
        className="
            bg-no-repeat
            h-[700px] w-full"
        style={{
          backgroundImage: `url('${background}')`,
        }}
      >
        <Carousel />
      </div>
      <div className="bg-[#F6F6F6]">
        <GameStory />
      </div>
      <Contact />
      <div className="bg-[#F6F6F6] text-center py-10">
        <p className="righteous-42 text-[#725346] pb-10 ">SOCIAL</p>
        <SocailLinks />
      </div>
      <Subscribe />
      <Footer />
    </>
  );
};

export default Landing;
