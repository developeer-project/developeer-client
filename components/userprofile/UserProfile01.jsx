import React from 'react';
import styles from "../../styles/userprofilecss/userprofile01.module.scss";

const userprofile01 = () => {
  return (
    <div className={styles.profile_wrap}>
      <div className={styles.profile_left_wrap}>
        <div className={styles.card1}>
            <div className={styles.card}>
              <img src="https://www.w3schools.com/w3images/team2.jpg" alt="John"/>
                <h1>John Doe</h1>
                <p className={styles.title}>CEO & Founder, Example</p>
                <p>Harvard University</p>
                <div className={styles.linkystuff}>
                  <a href="#"><i>Meow</i></a>
                  <a href="#"><i>Meow</i></a>
                  <a href="#"><i>Meow</i></a>
                  <a href="#"><i>Meow</i></a>
                </div>
                </div>
                <p><button>Contact</button></p>
        </div>

      </div>

      <div className={styles.profile_right_wrap}>
        aur kya details daalne hai idhar that goes here

      </div>
    </div>
  );
};
export default userprofile01;