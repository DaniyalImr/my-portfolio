import HeroText from "./HeroText";
import HeroPic from "./HeroPic";
import DownloadResume from "../DownloadResume";

const HeroMain = () => {
  return (
    <div className="container pt-40 pb-16">
      <div className="container flex md:flex-row sm:flex-col  max-w-[1200px] mx-auto justify-between items-center relative px-4">
        <HeroText />
        <HeroPic />
      </div>
      <div>
        <DownloadResume/>
      </div>
    </div>
  );
};

export default HeroMain;
