import styles from "../../styles/homepage-comps/midsect.module.scss";
import WorkFlowCard from "./WorkFlowCard";
import { Title } from "@mantine/core";

const MidSect = () => {
  return (
    <section>
      <div className={styles.wrap}>
        <div className={styles.header}>
          <Title className={styles.heading} order={1}>
            Section 2 title
          </Title>
          <Title className={styles.sub_heading} order={6}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repellendus, rerum?
          </Title>
        </div>
        <div className={styles.card_wrap}>
          <WorkFlowCard />
          <WorkFlowCard />
          <WorkFlowCard />
        </div>
      </div>
    </section>
  );
};

export default MidSect;
