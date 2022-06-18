import Styles from "./index.module.scss";
import { Header } from "./partials/Header";

export const RootComp = () => {
  return (
    <div className={Styles.Main_Container}>
      <Header />
    </div>
  );
};
