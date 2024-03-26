import React, { useState } from "react";
import Defaultlayout from "../Layout/Default.layout";
import PosterSlidercomponent from "../Components/PosetrSlider/PosterSlider.component";
import EntertainmentCard from "../Components/Entertainment/Entertainmentcard.component";
import Herocaroselcomponent from "../Components/Hercarosel/HeroCarosel.component";
const Homepage = () => {
  const [RecommendedMovies, setRecommendedMovis] = useState();
  const [OnlineStreamEvent, setOnlineStreamEvent] = useState();
  const [PremierMovies, setPremierMovies] = useState();
  return (
    <>
      <Herocaroselcomponent />
      <div className="container mx-auto px-4 md:px-12 my-8">
        <h1 className="text-2xl font-bold text-gray-700 sm:ml-3 ml-0 my-3">
          Best of Entertainment
        </h1>
        <EntertainmentCard />
      </div>
      <div className="container mx-auto px-4 md:px-12 my-8">
        <PosterSlidercomponent
          title="Recommended Movies"
          subject=" List of Recommended Movies"
          posters={RecommendedMovies}
          isDark={false}
        />
      </div>
      <div className="bg-premier-800 py-12">
        <div className="container mx-auto px-4 md:px-12 my-8 flex flex-col gap-3">
          <div className="hidden md:flex">
            <img src="" alt="RuPay" className="w-full h-full " />
          </div>
        </div>
        <div className="container mx-auto px-4 md:px-12 my-8 flex flex-col gap-3">
          <PosterSlidercomponent
            title="Premiers"
            subject="Brand New Release Every Friday"
            posters={PremierMovies}
            isDark={true}
          />
        </div>
      </div>
    </>
  );
};
//export default Homepage;
export default Defaultlayout(Homepage);
