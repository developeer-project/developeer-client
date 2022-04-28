import React from "react";
import { createStyles, Card, Avatar, Text, Group, Button } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  card: {
    margin: "0 1rem",
    height: "100%",
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
  },

  avatar: {
    border: `2px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white
    }`,
  },
}));

export function UserCard({ image, avatar, name, job, stats }) {
  const { classes, theme } = useStyles();
  var stats = [
    {
      label: "Followers",
      value: 33,
    },
    {
      label: "Friends",
      value: 1,
    },
  ];
  const items = stats.map((stat) => (
    <div key={stat.label}>
      <Text align="center" size="lg" weight={500}>
        {stat.value}
      </Text>
      <Text align="center" size="sm" color="dimmed">
        {stat.label}
      </Text>
    </div>
  ));

  return (
    <Card withBorder p="md" m="8" radius="md" className={classes.card}>
      <Card.Section sx={{ backgroundImage: `url(${image})`, height: 140 }} />
      <Avatar
        src={avatar}
        size={80}
        radius={80}
        mx="auto"
        mt={-30}
        className={classes.avatar}
      />
      <Text align="center" size="lg" weight={500} mt="sm">
        {name || "Riya k Hatwar"}
      </Text>
      <Text align="center" size="sm" color="dimmed">
        {job || "Full stack desinger"}
      </Text>
      <Group mt="md" position="center" spacing={30}>
        {/* {items} || BCOM Tuition teacher */}
        {items}
      </Group>
      <Button
        fullWidth
        radius="md"
        mt="xl"
        size="md"
        color={theme.colorScheme === "dark" ? undefined : "dark"}>
        Follow
      </Button>
    </Card>
  );
}
