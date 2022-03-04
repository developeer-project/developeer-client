import React from "react";

import styles from "../../styles/homepage-comps/slider.module.scss";
import SliderCard from "./SliderCard";

const Slider = () => {
  return (
    <div className={styles.root_box}>
      {/* <h3>Slider box</h3> */}
      {/* slider box */}
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
    </div>
  );
};

export default Slider;
