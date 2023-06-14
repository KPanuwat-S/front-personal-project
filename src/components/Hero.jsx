import heroImg from "../assets/HomePagePics/hero-01.jpg";
import CTA from "./CTA";

function Hero({ text }) {
  return (
    <div className="flex mb-[200px] w-full relative hover:">
      <div className="absolute top-1/2 left-[150px]">
        <h1 className=" text-6xl text-center text-white">{text}</h1>
      </div>
      <img src={heroImg} alt="" />
    </div>
  );
}

export default Hero;
