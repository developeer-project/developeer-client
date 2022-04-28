import React from "react";
import { Group, Box } from "@mantine/core";

import { UserCard } from "../../../components/profile/UserProfileCard";
import styles from "../../../styles/profilepage.module.scss";
import { InfoTab } from "../../../components/profile/InfoTabs";

const profile = () => {
  return (
    <div className={styles.root_container}>
      <div className={styles.cover_image}></div>
      <div className={styles.profile_content}>
        <div className={styles.card__box}>
          <UserCard />
        </div>
        <div className={styles.info__box}>
          <InfoTab />
        </div>
      </div>
    </div>
  );
};

export default profile;

export async function getServerSideProps(context) {
  const { uid } = context.query;
  return {
    props: {}, // will be passed to the page component as props
  };
}
