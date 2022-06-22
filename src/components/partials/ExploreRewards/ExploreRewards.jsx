import { useContext } from "react";
import { RootContext } from "../../context/RootContext";
import { MainButton } from "../Hero/Sections/HeroSections";
import Styles from "./ExploreRewards.module.scss";

export const ExploreRewards = ({ number }) => {
  const { sectionContent } = useContext(RootContext);

  let img = sectionContent[number].backgroundImg;

  console.log("img", img);

  return (
    <>
      <section
        className={Styles.ExploreRewards_container}
        style={{
          backgroundImage: "url(" + { img } + ")",
        }}
      >
        {/* <img src={sectionContent[number].backgroundImg} alt="" /> */}
        <div className={Styles.ExploreRewards_container_child}>
          <div className={Styles.ExploreRewards_content}>
            <div className={Styles.ExploreRewards_heading}>
              {sectionContent[number].upperSec.heading.map((heading) => {
                return <h2>{heading}</h2>;
              })}
            </div>
            <div className={Styles.ExploreRewards_paragraph}>
              <p>{sectionContent[number].upperSec.para}</p>
            </div>
          </div>
          <div className={Styles.ExploreRewards_below}>
            <div className={Styles.ExploreRewards_below_content}>
              {sectionContent[number].lowerSec.para.map((conent) => {
                return <p>{conent}</p>;
              })}
            </div>
            <MainButton content={sectionContent[number].lowerSec.btnText} />
          </div>
        </div>
      </section>
    </>
  );
};
