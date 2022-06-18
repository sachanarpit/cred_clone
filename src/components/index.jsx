import Styles from "./index.module.scss";
import { AfeterHeader } from "./partials/AfterHeader/AfterHeader";
import { Header } from "./partials/Header/Header";

export const RootComp = () => {
  return (
    <div className={Styles.Main_Container}>
      <Header />
      <AfeterHeader />
    </div>
  );
};
