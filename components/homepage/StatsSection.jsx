import React from "react";
import {
  RingProgress,
  Text,
  SimpleGrid,
  Paper,
  Center,
  Group,
} from "@mantine/core";
import { ArrowUpRight, ArrowDownRight } from "tabler-icons-react";

const icons = {
  up: ArrowUpRight,
  down: ArrowDownRight,
};

export function StatusSection() {
  const data = [
    {
      label: "New users daily",
      stats: "700%",
      progress: "4/5",
      color: "teal",
      icon: "up",
    },
    {
      label: "New users daily",
      stats: "700%",
      progress: "4/5",
      color: "teal",
      icon: "up",
    },
    {
      label: "New users daily",
      stats: "700%",
      progress: "4/5",
      color: "teal",
      icon: "up",
    },
  ];

  const stats = data.map((stat) => {
    const Icon = icons[stat.icon];
    return (
      <Paper withBorder radius="md" p="xs" key={stat.label}>
        <Group>
          <RingProgress
            size={80}
            roundCaps
            thickness={8}
            sections={[{ value: stat.progress, color: stat.color }]}
            label={
              <Center>
                <Icon size={22} />
              </Center>
            }
          />

          <div>
            <Text color="dimmed" size="xs" transform="uppercase" weight={700}>
              {stat.label}
            </Text>
            <Text weight={700} size="xl">
              {stat.stats}
            </Text>
          </div>
        </Group>
      </Paper>
    );
  });
  return (
    <SimpleGrid
      mx="auto"
      sx={(theme) => ({
        padding: `${theme.spacing.xl * 3}px ${theme.spacing.xl}px`,
        width: "90%",
        marginTop: theme.spacing.xl * 2,
      })}
      cols={3}
      breakpoints={[{ maxWidth: "sm", cols: 1 }]}>
      {stats}
    </SimpleGrid>
  );
}
