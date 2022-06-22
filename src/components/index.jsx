import Styles from "./index.module.scss";
import { AfeterHeader } from "./partials/AfterHeader/AfterHeader";
import { ExploreRewards } from "./partials/ExploreRewards/ExploreRewards";
import { Header } from "./partials/Header/Header";
import { HeroSection } from "./partials/Hero/Hero";

export const RootComp = () => {
  return (
    <div className={Styles.Main_Container}>
      <Header />
      <AfeterHeader />
      <HeroSection />
      <ExploreRewards number={1} />
      <ExploreRewards number={2} />
      <ExploreRewards number={3} />
    </div>
  );
};
