import HeroBanner from "./components/HeroBanner";
import Maps from "./components/Maps";
import Temples from "./components/Temples";
import Infrastructure from "./components/Infrastructure";
import Service from "./components/Service";
import LatestNews from "./components/Latest-news";
import Feedback from "./components/Feedback";
import Counter from "./components/Counter";
import AwardsPage1 from "./components/Awards1";

const page = () => {
  return (
    <>
      <HeroBanner />
      <AwardsPage1 />
      <Counter />
      <Service />
      <Temples />
      <Infrastructure />
      <LatestNews />
      <Feedback />
      <Maps />
    </>
  );
}
export default page;