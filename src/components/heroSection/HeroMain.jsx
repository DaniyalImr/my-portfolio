import HeroText from "./HeroText";
import HeroPic from "./HeroPic";
import DownloadResume from "../DownloadResume";

const HeroMain = () => {
  return (
    <div className="pt-40 pb-16">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex md:flex-row sm:flex-col justify-between items-center relative">
          <HeroText />
          <HeroPic />
        </div>
        <div className="mt-8 flex justify-center">
          <DownloadResume />
        </div>
      </div>
    </div>
  );
};

export default HeroMain;
