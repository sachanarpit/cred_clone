import { logos } from "../assets";
import Styles from "./Header.module.scss";

export const Header = () => {
  return (
    <div className={Styles.Header_Container}>
      <section className={Styles.Header_section}>
        <div className={Styles.logo_container}>
          <img src={logos.icon} alt="logo" />
        </div>
        <div className={Styles.right_section_container}>
          <div className={Styles.right_section_link_container}>
            <a href="">check credit score</a>
          </div>
          <div className={Styles.right_section_link_container}>
            <a href="">credit card bill payment</a>
          </div>
        </div>
      </section>
    </div>
  );
};
