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
        <div className={styles.header}>
          <h2>About</h2>
        </div>
        Baby shark, doo doo doo doo doo doo
Baby shark, doo doo doo doo doo doo
Baby shark, doo doo doo doo doo doo
Baby shark!

Mommy shark, doo doo doo doo doo doo
Mommy shark, doo doo doo doo doo doo
Mommy shark, doo doo doo doo doo doo
Mommy shark!

Daddy shark, doo doo doo doo doo doo
Daddy shark, doo doo doo doo doo doo
Daddy shark, doo doo doo doo doo doo
Daddy shark!

Grandma shark, doo doo doo doo doo doo
Grandma shark, doo doo doo doo doo doo
Grandma shark, doo doo doo doo doo doo
Grandma shark!

Grandpa shark, doo doo doo doo doo doo
Grandpa shark, doo doo doo doo doo doo
Grandpa shark, doo doo doo doo doo doo
Grandpa shark!

Let’s go hunt, doo doo doo doo doo doo
Let’s go hunt, doo doo doo doo doo doo
Let’s go hunt, doo doo doo doo doo doo
Let’s go hunt!
    {/* <div className={styles.profile_left_wrap}>
      Left Section
    </div> */}
    <div className={styles.header}>
          <h2>Skills</h2>
        </div>
    <div className={styles.profile_card}>
    <div className={styles.row}>
  <div className={styles.column}>
    <div className={styles.card}>
      <h3>Card 1</h3>
      <p>Some text</p>
      <p>Some text</p>
    </div>
  </div>

  <div className={styles.column}>
    <div className={styles.card}>
      <h3>Card 2</h3>
      <p>Some text</p>
      <p>Some text</p>
    </div>
  </div>
  
  <div className={styles.column}>
    <div className={styles.card}>
      <h3>Card 3</h3>
      <p>Some text</p>
      <p>Some text</p>
    </div>
  </div>
  
  <div className={styles.column}>
    <div className={styles.card}>
      <h3>Card 4</h3>
      <p>Some text</p>
      <p>Some text</p>
    </div>
  </div>
</div>
</div>
      </div>
    </div>
  );
};
export default userprofile01;