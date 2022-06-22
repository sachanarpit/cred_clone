import { HeroPhone } from "../../../assets";
import Styles from "./HeroSection.module.scss";

export const HeroTopSection = () => {
  return (
    <>
      <div className={Styles.HeroTopSection_container}>
        <div className={Styles.HeroTopSection_insideContainer}>
          <div className={Styles.HeroTopSection_Heading}>
            rewards for paying <br /> credit card bills.
          </div>
          <div className={Styles.HeroTopSection_descripition}>
            <p>join 9M+ members who win rewards and cashbacks everyday</p>
          </div>
          <div className={Styles.HeroTopSection_button}>
            <MainButton content={"Download CRED"} />
          </div>
        </div>
        c
      </div>
    </>
  );
};

export const HeroBottomSection = () => {
  return (
    <>
      <div className={Styles.HeroBottomSection}>
        <div className={Styles.HeroBottomSection_innerContainer}>
          <div className={Styles.PhoneContainer}>
            <img src={HeroPhone[1]} alt="" />
          </div>
          <div className={Styles.PhoneContainer}>
            <img src={HeroPhone[2]} alt="" />
          </div>
          <div className={Styles.PhoneContainer}>
            <img src={HeroPhone[4]} alt="" />
          </div>
          <div className={Styles.PhoneContainer}>
            <img src={HeroPhone[5]} alt="" />
          </div>
          <div className={Styles.PhoneContainer}>
            <img src={HeroPhone[3]} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export const MainButton = ({ content }) => {
  return (
    <>
      <button className={Styles.Mainbtn}>{content}</button>
    </>
  );
};
