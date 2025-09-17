import Carousel from "../Carousel";
import HeroDescription from "./HeroDescription";

export default function Hero() {
  return (
    <div className="flex flex-col items-center">
      <Carousel />
      <HeroDescription />
      {/* <SearchBar /> */}
      {/* <CustomSwiper /> */}
    </div>
  );
}
