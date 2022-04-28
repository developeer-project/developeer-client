import React from "react";
import { Group, Box } from "@mantine/core";

import { UserCard } from "../../../components/profile/UserProfileCard";
import styles from "../../../styles/profilepage.module.scss";
import { InfoTab } from "../../../components/profile/InfoTabs";
import axios from "axios";

const profile = ({ userData, userProjects }) => {
  return (
    <div className={styles.root_container}>
      <div className={styles.cover_image}></div>
      <div className={styles.profile_content}>
        <div className={styles.card__box}>
          <UserCard userData={userData} />
        </div>
        <div className={styles.info__box}>
          <InfoTab userData={userData} userProjects={userProjects} />
        </div>
      </div>
    </div>
  );
};

export default profile;

export async function getServerSideProps(context) {
  const { uid } = context.query;
  console.log("uid::",uid)
  const res = await axios.get(`${process.env.NEXTAUTH_URL}/api/user/${uid}`)
  const resPro = await axios.get(`${process.env.NEXTAUTH_URL}/api/project/${uid}`)
  // console.log("USERDATA::",resPro.data['project'])
  return {
    props: {
      userData: res.data['user'],
      userProjects: resPro.data['project'],
    }, // will be passed to the page component as props
  };
}
