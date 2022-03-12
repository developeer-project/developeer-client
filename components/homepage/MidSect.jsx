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
          <WorkFlowCard heading="SigIn/Register" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at." image="https://cdn.discordapp.com/attachments/951426015404654612/952113106572681246/icons8-login-100.png" />
          <WorkFlowCard heading="Find Peers" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at." image="https://cdn.discordapp.com/attachments/951426015404654612/952113520898609152/icons8-three-people-96.png" />
          <WorkFlowCard heading="Connect and Build" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at." image="https://cdn.discordapp.com/attachments/951426015404654612/952113881776553984/icons8-connect-100.png" />
        </div>
      </div>
    </section>
  );
};

export default MidSect;
