import Script from "next/script";

import { useEffect, useState, useRef } from "react";
// import NET from "vanta/dist/vanta.net.min.js";
import * as THREE from "three";
import RINGS from "vanta/dist/vanta.rings.min.js";
import Slider from "./Slider";
import styles from "../../styles/homepage-comps/top-section.module.scss";

const TopSection = () => {
  const [vantaEff, setVantaEff] = useState(0);
  const vantaRef = useRef(null);

  useEffect(() => {
    if (!vantaEff) {
      setVantaEff(
        RINGS({
          el: vantaRef.current,
          THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
        })
      );
    }

    return () => {
      if (vantaEff) vantaEff.destroy();
    };
  }, [vantaEff]);

  return (
    <section className={styles.landing_top_section}>
      <div className={styles.container}>
        <Slider />
        <main className={styles.mid}>
          <div ref={vantaRef} className={styles.vanta_container}></div>
          <div className={styles.hero_header}>
            <div className={styles.hero_text_wrap}>
              <h1>
                Ideate.
                <br />
                Connect.
                <br />
                Build Together.
              </h1>
            </div>
            {/* <div className={styles.btn_grad}>Take me there</div> */}
          </div>
        </main>
        <Slider />
      </div>
    </section>
  );
};

export default TopSection;
