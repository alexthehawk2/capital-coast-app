import React from "react";
import styles from "./style";
import { Hero, Navbar, Stats } from "./components";
const App = () => {
  return (
    <div className="bg-primary w-full overflow-hidden text-white">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
        </div>
      </div>
    </div>
  );
};

export default App;
