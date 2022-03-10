import styles from "../../styles/homepage-comps/midsect.module.scss";
import WorkFlowCard from "./WorkFlowCard";
import { Title } from "@mantine/core";

const MidSect = () => {
  return (
    <section>
      <div className={styles.wrap}>
        <div className={styles.header}>
          <Title className={styles.heading} order={1}>
            Workflow
          </Title>
          {/* <Title className={styles.sub_heading} order={6}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repellendus, rerum?
          </Title> */}
        </div>
        <div className={styles.card_wrap}>
          <WorkFlowCard heading="Heading 1" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at." image="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/design_128.png?raw=true" />
          <WorkFlowCard heading="Heading 2" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at." image="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/design_128.png?raw=true" />
          <WorkFlowCard heading="Heading 3" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at." image="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/design_128.png?raw=true" />
        </div>
      </div>
    </section>
  );
};

export default MidSect;
