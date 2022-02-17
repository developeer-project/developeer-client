import { Title } from "@mantine/core";
import { Loader } from "@mantine/core";
import { Avatar, Badge } from "@mantine/core";

import styles from "../styles/Homepage.module.scss";

export default function HomePage() {
  const avatar = (
    <Avatar alt="Avatar for badge" size={24} mr={5} src="image-link" />
  );
  return (
    <>
      <h1 className="stylename">
        html Example 1 --: styles are taken from
        <span>styles/globals.scss </span>
      </h1>

      <h3 className={styles.head3}>
        html Example 2 --: styles taken from
        <span> styles/Homepage.module.scss </span>
      </h3>

      <Title sx={{ color: "blue", fontSize: 32 }} order={2}>
        Mantine Example 1 --: styles taken from
        <span> sx property in line number 17</span>
      </Title>

      <Loader />

      <Badge sx={{ paddingLeft: 0 }} size="lg" leftSection={avatar}>
        Badge with Avatar
      </Badge>
    </>
  );
}
