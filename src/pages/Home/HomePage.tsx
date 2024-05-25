import DevInfo from "../../components/ui/DevInfo";
import HeroBanner from "../../components/ui/HeroBanner";
import SuccessStories from "../../components/ui/SuccessStories";

const HomePage = () => {
  return (
    <div>
      <HeroBanner />
      <SuccessStories />
      <DevInfo />
    </div>
  );
};

export default HomePage;
