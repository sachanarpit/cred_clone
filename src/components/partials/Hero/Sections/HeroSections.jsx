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
            <button>Download CRED</button>
          </div>
        </div>
      </div>
    </>
  );
};

export const HeroBottomSection = () => {
  return <></>;
};
