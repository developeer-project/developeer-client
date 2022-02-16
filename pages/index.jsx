import { Title } from "@mantine/core";
import styles from "../styles/Homepage.module.scss";

export default function HomePage() {
  return (
    <>
      <h1 className="stylename">
        html Example 1 --: styles are taken from{" "}
        <span>styles/globals.scss </span>{" "}
      </h1>

      <h3 className={styles.head3}>
        html Example 2 --: styles taken from
        <span> styles/Homepage.module.scss </span>
      </h3>

      <Title sx={{ color: "blue", fontSize: 32 }} order={2}>
        Mantine Example 1 --: styles taken from{" "}
        <span> sx property in line number 17</span>
      </Title>
    </>
  );
}
