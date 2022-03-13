import React from "react";

import styles from "../../styles/homepage-comps/slider.module.scss";
import SliderCard from "./SliderCard";

const Slider = () => {
  return (
    <div className={styles.root_box}>
      {/* <h3>Slider box</h3> */}
      {/* slider box */}

      {/* <marquee
        behaviour="scroll"
        direction="down"
        scrollamount="2"
        behavior="scroll"
        scrolldelay="85"
        height="90%"
      > */}
      <SliderCard />
      <SliderCard />
      <SliderCard />
      <SliderCard />
      <SliderCard />
      <SliderCard />
      <SliderCard />
      <SliderCard />
      <SliderCard />
      <SliderCard />
      {/* </marquee> */}
    </div>
  );
};

export default Slider;
