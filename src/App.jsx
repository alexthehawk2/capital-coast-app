import React from "react";
import styles from "./style";
import {
  Billing,
  Business,
  Clients,
  CreditCard,
  Footer,
  Hero,
  Navbar,
  Stats,
  Testimonials,
  TryService,
} from "./components";
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
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Business />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart} px-2 sm:px-16 py-5`}>
        <div className={`${styles.boxWidth}`}>
          <Billing />
        </div>
      </div>
      <div className={`bg-primary ${styles.flexStart} px-2 sm:px-16 py-5`}>
        <div className={`${styles.boxWidth}`}>
          <CreditCard />
        </div>
      </div>
      <div className={`bg-primary ${styles.flexStart} px-2 sm:px-16 py-5`}>
        <div className={`${styles.boxWidth}`}>
          <Testimonials />
        </div>
      </div>
      <div className={`bg-primary ${styles.flexStart} px-2 sm:px-16 py-5`}>
        <div className={`${styles.boxWidth}`}>
          <Clients />
        </div>
      </div>
      <div className={`bg-primary ${styles.flexStart} px-2 sm:px-16 py-5`}>
        <div className={`${styles.boxWidth}`}>
          <TryService />
        </div>
      </div>
      <div className={`bg-primary ${styles.flexStart} px-2 sm:px-16 py-5`}>
        <div className={`${styles.boxWidth}`}>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
